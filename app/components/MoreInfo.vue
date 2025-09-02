<script setup lang="ts">
const features = ref([
  {
    title: 'Size',
    description: 'Compatible with all phones from iphone 16 pro max to pixel 5. The tray area is 6.9 inches x 3.3 inches or 173mm x 83mm.',
    icon: 'i-lucide-smartphone'
  },
  {
    title: 'Design',
    description: 'Coated in a matte black rubber finish the charger looks factory and a seamless upgrade to your mercedes interior.',
    icon: 'i-lucide-circuit-board'
  },
  {
    title: 'Community',
    description: 'Originally funded on kickstarter by the w204 community raising nearly $20,000.',
    icon: 'i-lucide-smile',
    to: 'https://www.kickstarter.com/projects/w204charger/w204-wireless-charger',
    target: '_blank'
  }
])
</script>

<template>
  <UPageSection
    id="more-info"
    title="Transform your driving experience"
    description="Imagine the convenience of placing your phone down and have it charging."
    :features="features"
  >
  <Pricing />
  </UPageSection>
</template>
