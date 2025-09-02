import Stripe from 'stripe'

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

interface CreateCheckoutOptions {
  priceId: string
  mode: 'payment' | 'subscription'
  successUrl: string
  cancelUrl: string
  clientReferenceId?: string
  user?: any
  couponId?: string
}

export async function createCheckout(options: CreateCheckoutOptions, env?: any): Promise<string> {
  const {
    priceId,
    mode,
    successUrl,
    cancelUrl,
    clientReferenceId,
    user,
    couponId,
  } = options

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...(clientReferenceId && { client_reference_id: clientReferenceId }),
    ...(user?.email && { customer_email: user.email }),
    ...(couponId && { discounts: [{ coupon: couponId }] }),
  }

  const session = await getStripe(env).checkout.sessions.create(sessionParams)
  
  if (!session.url) {
    throw new Error('Failed to create Stripe checkout session')
  }

  return session.url
}

export async function findCheckoutSession(sessionId: string, env?: any): Promise<Stripe.Checkout.Session | null> {
  try {
    const session = await getStripe(env).checkout.sessions.retrieve(sessionId, {
      expand: ['line_items']
    })
    return session
  } catch (error) {
    console.error('Error retrieving checkout session:', error)
    return null
  }
}
