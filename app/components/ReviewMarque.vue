<script setup lang="ts">
const testimonials = [
  {
    user: {
      name: 'Owen Davis',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://i.etsystatic.com/iusa/a43c04/88455198/iusa_75x75.88455198_8ojt.jpg?version=0',
        loading: 'lazy'
      }
    },
    quote:
        'This product has exceeded my expectations. It is great quality!'
  },
  {
    user: {
      name: 'Troy Barber',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://i.etsystatic.com/site-assets/images/avatars/default_avatar.png?width=75',
        loading: 'lazy'
      }
    },
    quote:
      "This is a very well designed wireless charger for the W204. Fits flush and looks factory. Best charging solution for this car hands down. Well worth it."
  },
  {
    user: {
      name: 'James Deigan',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://i.etsystatic.com/iusa/c50112/112079571/iusa_75x75.112079571_ftgw.jpg?version=0',
        loading: 'lazy'
      }
    },
    quote:
      'Great product! It honestly looks like its an OEM part, super easy to install and works perfectly with my iphone 15 pro max.'
  },
  {
    user: {
      name: 'Ben Rivest',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        alt: 'Ben Rivest',
        loading: 'lazy'
      }
    },
    quote:
      'Ce fond parfaitement avec le model de l’auto même finition et donne un aspect original du véhicule j’adore'
  },
  {
    user: {
      name: 'Carolyn Alchin',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://i.etsystatic.com/iusa/c9fb2f/45557032/iusa_75x75.45557032_oam2.jpg?version=0',
        loading: 'lazy'
      }
    },
    quote:
      "Great charger for C250 CLI 2012 w204 Avantgarde sedan. Fits iPhone 11 Pro Max in a Tech21 case with about 5mm to spare. To remove shifter & parts of console, this video was clearer https://youtu.be/c1QKmBSFqk4 Tip: after removing the shifter knob & leather, you do not need to separate the silver surround & cables from the wood surround. Leave it all intact, put thumbs under two front corners of silver AND wood surround together (corners closest to climate controls), & pull upward firmly to lift those corners. (Pic shows two fingers pointing at the corner clip release & slot.) Then slide the wood & silver unit forward gently 20mm & lift it over the shifter stick, leaving cables intact. Then follow video the seller provided to remove screws to get old ashtray/12V unit out & install new unit. Great product!!!"
  },
  {
    user: {
      name: 'u/throwit72211',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        alt: 'user',
        loading: 'lazy'
      }
    },
    quote:
      'installed it immediately. 5 minute install was no sales trick! You almost can’t see that this is a retrofit solution. Very well done, really happy with it!'
  },
  {
    user: {
      name: 'Paul Savage',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-1/299895739_5358738217573698_1956006819908709726_n.jpg?stp=c0.0.938.938a_dst-jpg_s100x100_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=1uc2Cu5VzPEQ7kNvwFfSXZv&_nc_oc=AdkJsNj-w_8HvAsGDzFegO7pnNk5lqFIlHwWu7qSPQqT1Xe8HpRrcUMVELU74342PrU&_nc_zt=24&_nc_ht=scontent.fbne9-2.fna&_nc_gid=WY71du1SD0dL6L05ffiPeA&oh=00_AfWgR3SqmeKq4zJBWsU7qCB37c4iQDH16r3hmqdtFWQGCg&oe=68BC01ED',
        loading: 'lazy'
      }
    },
    quote:
      'Got to say what an amazing product thank you, can definitely recommend.'
  },
  {
    user: {
      name: 'Estéban Soubiran',
      description: '⭐⭐⭐⭐⭐',
      avatar: {
        src: 'https://pbs.twimg.com/profile_images/1801649350319218689/aS_X_iTm_400x400.jpg',
        loading: 'lazy'
      }
    },
    quote:
      "Très très content de mon achat !!! Super lumineux, très bien conçu"
  }
]
</script>

<template>
    <UMarquee
      pause-on-hover
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </UPageCard>
    </UMarquee>
</template>
