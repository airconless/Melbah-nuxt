<template>
  <div>
    <!-- This page redirects immediately, so no content is needed -->
  </div>
</template>

<script setup lang="ts">
// Redirect to index page immediately
await navigateTo('/', { replace: true })
</script>
