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

  const extraParams: any = {}

  // Handle customer creation and payment settings
  if (user?.customerId) {
    extraParams.customer = user.customerId
  } else {
    if (mode === 'payment') {
      extraParams.customer_creation = 'always'
      extraParams.payment_intent_data = { setup_future_usage: 'on_session' }
    }
    if (user?.email) {
      extraParams.customer_email = user.email
    }
    extraParams.tax_id_collection = { enabled: true }
  }

  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode,
    allow_promotion_codes: true,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    shipping_address_collection: {
      allowed_countries: [
        'US', 'AE', 'AG', 'AL', 'AM', 'AR', 'AT', 'AU', 'BA', 'BR', 'BE', 'BG', 'BH', 'BO', 'CA', 'CH', 'CI', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EC', 'EE', 'EG', 'ES', 'ET', 'FI', 'FR', 'GB', 'GH', 'GM', 'GR', 'GT', 'GY', 'HK', 'HR', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JM', 'JO', 'JP', 'KE', 'KH', 'KR', 'KW', 'LC', 'LI', 'LK', 'LT', 'LU', 'LV', 'MA', 'MD', 'MG', 'MK', 'MN', 'MO', 'MT', 'MU', 'MX', 'MY', 'NA', 'NG', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PT', 'PY', 'QA', 'RO', 'RS', 'RW', 'SA', 'SE', 'SG', 'SI', 'SK', 'SN', 'SV', 'TH', 'TN', 'TR', 'TT', 'TZ', 'UY', 'UZ', 'VN', 'ZA', 'BD', 'BJ', 'MC', 'NE', 'SM', 'AZ', 'BN', 'BT', 'AO', 'DZ', 'TW', 'BS', 'BW', 'GA', 'LA', 'MZ', 'ZW', 'KZ', 'PK'
      ],
    },
    billing_address_collection: 'required',
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...(clientReferenceId && { client_reference_id: clientReferenceId }),
    ...(couponId && { discounts: [{ coupon: couponId }] }),
    ...extraParams,
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

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export async function createCustomerPortal(customerId: string, returnUrl: string, env?: any): Promise<string | null> {
  try {
    const portalSession = await getStripe(env).billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return portalSession.url
  } catch (error) {
    console.error('Error creating customer portal session:', error)
    return null
  }
}
