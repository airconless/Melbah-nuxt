import { createCheckout } from '../../../libs/stripe'

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export default defineEventHandler(async (event) => {
  try {
    const { STRIPE_SECRET_KEY } = event.context.cloudflare?.env || {}
    const body = await readBody(event)

    if (!body.priceId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Price ID is required'
      })
    } else if (!body.successUrl || !body.cancelUrl) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Success and cancel URLs are required'
      })
    } else if (!body.mode) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Mode is required (either "payment" for one-time payments or "subscription" for recurring subscription)'
      })
    }

    // Uncomment these lines when you have authentication set up
    // const session = await getServerSession(authOptions)
    // await connectMongo()
    // const user = await User.findById(session?.user?.id)

    const { priceId, mode, successUrl, cancelUrl } = body

    const stripeSessionURL = await createCheckout({
      priceId,
      mode,
      successUrl,
      cancelUrl,
      // If user is logged in, it will pass the user ID to the Stripe Session so it can be retrieved in the webhook later
      // clientReferenceId: user?._id?.toString(),
      // If user is logged in, this will automatically prefill Checkout data like email and/or credit card for faster checkout
      // user,
      // If you send coupons from the frontend, you can pass it here
      // couponId: body.couponId,
    }, event.context.cloudflare?.env)

    return { url: stripeSessionURL }
  } catch (error: any) {
    console.error('Checkout error:', error)
    
    // If it's already a Nuxt error, re-throw it
    if (error.statusCode) {
      throw error
    }
    
    // Otherwise, create a generic server error
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Internal server error'
    })
  }
})
