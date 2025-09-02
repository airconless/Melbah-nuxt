<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto text-center">
      <div class="mb-8">
        <div class="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <UIcon name="i-lucide-check-circle" class="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h1 class="text-3xl font-bold text-heading mb-4">Payment Successful!</h1>
        <p class="text-lg text-muted mb-6">
          Thank you for your purchase! Your order has been confirmed and you will receive a tracking email from Auspost in 2-3 days.
        </p>
      </div>

      <div class="mt-8 pt-6 border-t border-default">
        <p class="text-sm text-muted">
          Questions about your order? Contact us at 
          <a href="mailto:hello.metricdecor@gmail.com" class="text-primary hover:underline">
            hello.metricdecor@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Payment Successful - Melbah',
  meta: [
    { name: 'description', content: 'Your payment was successful! Thank you for your purchase.' },
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
