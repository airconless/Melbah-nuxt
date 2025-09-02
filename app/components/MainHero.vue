<script setup lang="ts">
const links = ref([
  {
    label: 'Upgrade Now',
    to: '/fit',
    trailingIcon: 'i-lucide-vibrate',
    color: 'secondary' as const,
  },
  {
    label: 'Learn more',
    to: '#more-info',
    color: 'neutral' as const,
    variant: 'subtle' as const,
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Perfect Fit For Your Mercedes"
    headline="New V2 model"
    orientation="horizontal"
    :links="links"
  >
    <template #description>
      <div class="space-y-1">
        <div>• Works with iPhone and Android</div>
        <div>• 15W Wireless Charging</div>
        <div>• Install in 5 minutes</div>
        
      </div>
    </template>
    <HeroImage />
  </UPageHero>
  
  <!-- ReviewMarque with proper padding and width constraints -->
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-8 lg:pb-8 mt-4 sm:-mt-4 lg:-mt-10">
    <ReviewMarque />
  </div>
</template>
