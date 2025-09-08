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
      ],
      script: [
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1575752833254801');
            fbq('track', 'PageView');
          `,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1575752833254801&ev=PageView&noscript=1" />'
        }
      ]
    }
  }
})