// https://nuxt.com/docs/api/configuration/nuxt-config
import type { RouterConfig } from '@nuxt/schema';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: ["nitro-cloudflare-dev", "@nuxt/ui", "@compodium/nuxt"],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Mercedes Wireless Charger',
      meta: [
        // Basic Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Perfect Fit For Your Mercedes w204, w212, w207 and x204' },
        { name: 'keywords', content: 'Mercedes, wireless charger, w204, w212, w207, x204, car accessories' },
        { name: 'author', content: 'Melbah' },
        
        // Open Graph Image
        {
          property: 'og:image',
          content: 'https://i.etsystatic.com/54082274/r/il/e26ac2/7207974211/il_fullxfull.7207974211_g2rs.jpg'
        },
        // Open Graph Title
        {
          property: 'og:title',
          content: 'Mercedes Wireless Charger'
        },
        // Open Graph Description
        {
          property: 'og:description',
          content: 'Perfect Fit For Your Mercedes w204, w212, w207 and x204'
        },
        // Open Graph Type
        {
          property: 'og:type',
          content: 'website'
        },
        // Open Graph URL
        {
          property: 'og:url',
          content: 'https://melbah.com'
        },
        
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Mercedes Wireless Charger - Perfect Fit For Your Mercedes'
        },
        {
          name: 'twitter:description',
          content: 'Perfect Fit For Your Mercedes w204, w212, w207 and x204'
        },
        {
          name: 'twitter:image',
          content: 'https://i.etsystatic.com/54082274/r/il/e26ac2/7207974211/il_fullxfull.7207974211_g2rs.jpg'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-icon.png' }
      ]
    }
  }
})