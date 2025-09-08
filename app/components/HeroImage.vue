<script setup lang="ts">
const items = [
  'https://i.etsystatic.com/54082274/r/il/e26ac2/7207974211/il_fullxfull.7207974211_g2rs.jpg',
  'https://i.etsystatic.com/54082274/r/il/66ffa5/7159983426/il_fullxfull.7159983426_3s6i.jpg',
  'https://i.etsystatic.com/54082274/r/il/e6d871/7207996143/il_fullxfull.7207996143_9oje.jpg',
  'https://i.etsystatic.com/iap/94ff1b/6719184734/iap_640x640.6719184734_e9gyl63z.jpg',
  'https://i.etsystatic.com/54082274/r/il/893c26/7216670899/il_fullxfull.7216670899_2g5q.jpg',
  'https://i.etsystatic.com/54082274/r/il/891bff/6454663761/il_fullxfull.6454663761_6y4h.jpg',
  'https://i.etsystatic.com/iap/5b6cc3/7094137414/iap_640x640.7094137414_7meo8nzp.jpg',
  'https://i.etsystatic.com/iap/10a133/6515013776/iap_640x640.6515013776_kcvpsf12.jpg'
  // 'https://i.etsystatic.com/54082274/r/il/4ed8b8/6406574970/il_fullxfull.6406574970_487a.jpg'
]


</script>

<template>
  <UCarousel
    v-slot="{ item }"
    arrows
    loop
    dots
    :autoplay="{ delay: 3000 }"
    :items="items"
    class="w-full max-w-lg mx-auto"
  >
    <img :src="item" width="640" height="640" class="rounded-lg">
  </UCarousel>
</template>
