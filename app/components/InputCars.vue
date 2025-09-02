<script setup lang="ts">
interface Props {
  modelValue?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const items = ref([
  'E-class', 
  'GLK-class',
  'C63',
  'C180',
  'C200',
  'C220',
  'C230',
  'C250',
  'C280',
  'C300',
  'C320',
  'C350'
])

const selectedValue = computed({
  get: () => props.modelValue || undefined,
  set: (value: string) => emit('update:modelValue', value)
})
</script>

<template>
  <USelectMenu 
    v-model="selectedValue"
    :items="items" 
    icon="i-lucide-car"
    placeholder="Select car model"
    class="w-48"
  />
</template>
