<script setup lang="ts">
interface Props {
  disabled?: boolean
  carModel?: string
  facelift?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const isLoading = ref(false)

// Price ID mapping based on car model and facelift
const getPriceId = (carModel?: string, facelift?: string): string => {
  if (carModel === 'C63' && facelift === 'Facelift') {
    return 'price_1PAVmQA3WHkyDtzAMvhHoEwL'
  }
  return 'price_1PAVkIA3WHkyDtzA2liQQu27'
}

async function onClick() {
  if (isLoading.value) return
  
  try {
    isLoading.value = true
    
    const priceId = getPriceId(props.carModel, props.facelift)
    
    const response = await $fetch<{ url: string }>('/api/stripe/checkout', {
      method: 'POST',
      body: {
        priceId,
        mode: 'payment', // or 'subscription' if you want recurring payments
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      }
    })
    
    // Redirect to Stripe checkout
    if (response.url) {
      window.location.href = response.url
    }
  } catch (error) {
    console.error('Checkout error:', error)
    // You can add a toast notification here
    // toast.error('Failed to start checkout process')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
<UTooltip text="Complete the form to checkout">
  <UButton 
    :disabled="disabled || isLoading" 
    :loading="isLoading"
    color="neutral" 
    trailing 
    @click="onClick"
  >
    Checkout
  </UButton>
</UTooltip>
</template>

