<script setup lang="ts">
  import RotatingText from "~/components/RotatingText.vue";
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
    headline="New V2 model"
    orientation="horizontal"
    :links="links"
  >
    <template #title>
      <span class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted">
        Perfect Fit For<br><span class="inline-flex items-baseline">Your&nbsp;<RotatingText 
          :texts="['W204', 'W207', 'W207', 'W212','W212','X204','X204','W204']"
          split-by="characters"
          mainClassName="inline-block align-baseline overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          :staggerFrom="'last'"
          :initial="{ y: '100%' }"
          :animate="{ y: 0 }"
          :exit="{ y: '-120%' }"
          :staggerDuration="0.025"
          :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
          :rotationInterval="1850"
        /></span>
      </span>
    </template>
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
