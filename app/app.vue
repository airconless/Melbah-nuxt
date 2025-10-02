<template>
  <UApp>
    <UBanner color="neutral" icon="i-lucide-earth" title="Free shipping on all orders, V2 model $89" close/>
    <UHeader 
    title="Melbah" 
    mode="drawer" 
    :menu="{ direction: 'right' }"
  >
  
    <UNavigationMenu :items="items" />
    

    <template #right>
      <ColorModeButton :color="color" />
    </template>
    

    <template #body>
      <div class="flex flex-col justify-start pt-8 px-6">
        <div class="space-y-2">
          <NuxtLink 
            v-for="item in mobileItems" 
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-3 px-4 py-4 text-xl font-medium text-heading hover:bg-accented rounded-lg transition-colors duration-200"
            :class="{ 'bg-accented': item.active }"
          >
            <UIcon :name="item.icon" class="w-6 h-6" />
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </UHeader>

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-gamejolt" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="itemsfooter" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-tiktok"
          color="neutral"
          variant="ghost"
          to="https://tiktok.com/@melbah_modern"
          target="_blank"
          aria-label="TikTok"
        />
        <UButton
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          to="https://www.facebook.com/people/Melbah-Modern/61553274062901/"
          target="_blank"
          aria-label="Facebook"
        />
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://instagram.com/melbah_modern"
          target="_blank"
          aria-label="Instagram"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')


const route = useRoute()


const itemsfooter: NavigationMenuItem[] = [{
  label: 'Support',
  to: 'mailto:hello.metricdecor@gmail.com'
}, {
  label: 'Terms of Service',
  to: '/terms-of-service'
}, {
  label: 'Return Policy',
  to: '/return-policy'
}]

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Reviews',
    to: '/reviews',
    active: route.path.startsWith('/reviews')
  },
  {
    label: 'Install Guide',
    to: '/install-guide',
    active: route.path.startsWith('/instal')
  }
])

const mobileItems = computed(() => [
  {
    label: 'Reviews',
    to: '/reviews',
    icon: 'i-lucide-star',
    active: route.path.startsWith('/reviews')
  },
  {
    label: 'Install Guide',
    to: '/install-guide',
    icon: 'i-lucide-wrench',
    active: route.path.startsWith('/instal')
  }
])
</script>