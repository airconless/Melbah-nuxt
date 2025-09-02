<script setup lang="ts">
interface Props {
  modelValue?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const items = ref(['Facelift', 'Pre-facelift'])

const selectedValue = computed({
  get: () => props.modelValue || undefined,
  set: (value: string) => emit('update:modelValue', value)
})
</script>

<template>
  <USelectMenu 
    v-model="selectedValue"
    placeholder="Select if facelift" 
    :items="items" 
    class="w-40"
  />
</template>
