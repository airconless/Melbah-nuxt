<script setup lang="ts">
const selectedCar = ref('')
const selectedFacelift = ref('')

const showFacelift = computed(() => selectedCar.value === 'C63')

const isCheckoutEnabled = computed(() => {
  if (!selectedCar.value) return false
  if (selectedCar.value === 'C63' && !selectedFacelift.value) return false
  return true
})

// Clear facelift selection when car changes
watch(selectedCar, (newCar) => {
  if (newCar !== 'C63') {
    selectedFacelift.value = ''
  }
})
</script>

<template>
  <UPageHero
    title="Confirm the Fit"
    orientation="horizontal"
  >
    <template #description>
      <div class="space-y-4">
        <div class="space-y-1">
          <div>• Compatible with w204 C-class</div>
          <div>• Compatible with w212 and w207 E-class</div>
          <div>• Compatible with x204 GLK-class</div>
        </div>
        
        <div class="flex gap-4">
          <InputCars v-model="selectedCar" />
          <InputFacelift v-if="showFacelift" v-model="selectedFacelift" />
        </div>

        <CheckoutButton 
          :disabled="!isCheckoutEnabled" 
          :car-model="selectedCar"
          :facelift="selectedFacelift"
        />
      </div>
    </template>
    
    <img
      src="https://i.etsystatic.com/54082274/r/il/88bce2/6574430330/il_fullxfull.6574430330_mmci.jpg"
      alt="Fit collage example"
      class="rounded-lg shadow-2xl ring ring-default"
    />
  </UPageHero>
</template>
