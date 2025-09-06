<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-8">Redirecting you to the homepage...</p>
      <UButton to="/" size="lg" color="primary">
        Go to Homepage
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// Redirect to index page immediately
await navigateTo('/', { replace: true })
</script>
