<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto text-center">
      <div class="mb-8">
        <div class="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <UIcon name="i-lucide-x-circle" class="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h1 class="text-3xl font-bold text-heading mb-4">Redirecting...</h1>
        <p class="text-lg text-muted mb-6">
          Taking you back to the fit page.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
const router = useRouter()

useHead({
  title: 'Payment Cancelled - Melbah',
  meta: [
    { name: 'description', content: 'Your payment was cancelled. No charges have been made.' },
    { name: 'robots', content: 'noindex' }
  ]
})

// Show toast notification and redirect to fit page instantly
onMounted(() => {
  toast.add({
    title: 'Checkout Cancelled',
    description: 'Your checkout process was cancelled. You can try again anytime.',
    icon: 'i-lucide-x-circle',
    progress: false,
    color: 'warning'
  })
  
  // Redirect to fit page instantly
  router.push('/fit')
})
</script>
