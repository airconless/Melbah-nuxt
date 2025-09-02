import Stripe from 'stripe'
import { findCheckoutSession } from '../../../libs/stripe'

let stripe: Stripe

const getStripe = (env?: any) => {
  if (!stripe) {
    const secretKey = env?.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set')
    }
    stripe = new Stripe(secretKey, {
      apiVersion: '2025-08-27.basil',
    })
  }
  return stripe
}

// This is where we receive Stripe webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export default defineEventHandler(async (event) => {
  try {
    const { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } = event.context.cloudflare?.env || {}
    
    // Uncomment when you have MongoDB set up
    // await connectMongo()

    const body = await readRawBody(event)
    
    if (!body) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No body received'
      })
    }

    const signature = getHeader(event, 'stripe-signature')

    if (!signature) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No stripe signature found'
      })
    }

    let data: any
    let eventType: string
    let stripeEvent: Stripe.Event

    // verify Stripe event is legit
    try {
      stripeEvent = getStripe(event.context.cloudflare?.env).webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET!)
    } catch (err: any) {
      console.error(`Webhook signature verification failed. ${err.message}`)
      throw createError({
        statusCode: 400,
        statusMessage: err.message
      })
    }

    data = stripeEvent.data
    eventType = stripeEvent.type

    try {
      switch (eventType) {
        case "checkout.session.completed": {
          // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
          // ✅ Grant access to the product

          const session = await findCheckoutSession(data.object.id, event.context.cloudflare?.env)

          const customerId = session?.customer
          const priceId = session?.line_items?.data[0]?.price?.id
          const userId = data.object.client_reference_id
          
          // Uncomment when you have config set up
          // const plan = configFile.stripe.plans.find((p) => p.priceId === priceId)
          // if (!plan) break

          if (!customerId || !priceId) break

          // Handle customerId which can be string or Customer object
          const customerIdString = typeof customerId === 'string' ? customerId : customerId.id
          const customer = await getStripe(event.context.cloudflare?.env).customers.retrieve(customerIdString) as Stripe.Customer

          let user: any

          // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
          if (userId) {
            // Uncomment when you have User model set up
            // user = await User.findById(userId)
          } else if (customer.email) {
            // Uncomment when you have User model set up
            // user = await User.findOne({ email: customer.email })

            // if (!user) {
            //   user = await User.create({
            //     email: customer.email,
            //     name: customer.name,
            //   })
            //   await user.save()
            // }
          } else {
            console.error("No user found")
            throw new Error("No user found")
          }

          // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
          // Uncomment when you have User model set up
          // user.priceId = priceId
          // user.customerId = customerIdString
          // user.hasAccess = true
          // await user.save()

          // Extra: send email with user link, product page, etc...
          // try {
          //   await sendEmail({to: ...})
          // } catch (e) {
          //   console.error("Email issue:" + e?.message)
          // }

          break
        }

        case "checkout.session.expired": {
          // User didn't complete the transaction
          // You don't need to do anything here, by you can send an email to the user to remind him to complete the transaction, for instance
          break
        }

        case "customer.subscription.updated": {
          // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
          // You don't need to do anything here, because Stripe will let us know when the subscription is canceled for good (at the end of the billing cycle) in the "customer.subscription.deleted" event
          // You can update the user data to show a "Cancel soon" badge for instance
          break
        }

        case "customer.subscription.deleted": {
          // The customer subscription stopped
          // ❌ Revoke access to the product
          const subscription = await getStripe(event.context.cloudflare?.env).subscriptions.retrieve(data.object.id)
          const customerId = subscription.customer

          // Uncomment when you have User model set up
          // const user = await User.findOne({ customerId })

          // Revoke access to your product
          // user.hasAccess = false
          // await user.save()

          break
        }

        case "invoice.paid": {
          // Customer just paid an invoice (for instance, a recurring payment for a subscription)
          // ✅ Grant access to the product
          const priceId = data.object.lines.data[0].price.id
          const customerId = data.object.customer

          // Uncomment when you have User model set up
          // const user = await User.findOne({ customerId })

          // Make sure the invoice is for the same plan (priceId) the user subscribed to
          // if (user.priceId !== priceId) break

          // Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
          // user.hasAccess = true
          // await user.save()

          break
        }

        case "invoice.payment_failed":
          // A payment failed (for instance the customer does not have a valid payment method)
          // ❌ Revoke access to the product
          // ⏳ OR wait for the customer to pay (more friendly):
          //      - Stripe will automatically email the customer (Smart Retries)
          //      - We will receive a "customer.subscription.deleted" when all retries were made and the subscription has expired
          break

        default:
          // Unhandled event type
          console.log(`Unhandled event type: ${eventType}`)
      }
    } catch (e: any) {
      console.error("stripe error: " + e.message + " | EVENT TYPE: " + eventType)
    }

    return { received: true }
  } catch (error: any) {
    console.error('Webhook error:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Internal server error'
    })
  }
})
