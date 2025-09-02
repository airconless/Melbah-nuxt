<template>
  <UPageSection>
  <ReviewColumns/>
  <Pricing/>
  </UPageSection>
</template>

<script setup lang="ts">
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    date: "2 weeks ago",
    content: "Absolutely love my new Melbah setup! The quality is outstanding and the installation was smooth. Highly recommend!"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Los Angeles, CA",
    date: "1 month ago",
    content: "Great product with excellent customer service. The team was very helpful throughout the entire process."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Chicago, IL",
    date: "3 weeks ago",
    content: "Beautiful design and easy to maintain. Worth every penny! My home looks amazing now."
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Houston, TX",
    date: "1 week ago",
    content: "Fast delivery and professional installation. The product exceeded my expectations."
  },
  {
    id: 5,
    name: "Lisa Wang",
    location: "Seattle, WA",
    date: "2 months ago",
    content: "Excellent quality and attention to detail. I've received so many compliments on my new setup!"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Miami, FL",
    date: "3 weeks ago",
    content: "Outstanding customer service and a fantastic product. I'm very satisfied with my purchase."
  }
]

useHead({
  title: 'Customer Reviews - Melbah',
  meta: [
    { name: 'description', content: 'Read what our customers are saying about Melbah products and services.' }
  ]
})
</script>
