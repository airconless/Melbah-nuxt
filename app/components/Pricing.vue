<template>
    <UPricingPlan
      title="Mercedes Wireless Charging"
      description="For Mercedes w204, w212, w207 and x204"
      price="$89"
      :features="[
        '15W wireless charger',
        'Free shipping with tracking',
        'Works with iPhone and Android',
        'Extra USB-c port',
        'Works with a case',
        'Install in 5 minutes',
        'No extra tools required',
        'Qi Wireless Charging',
        'No more cables',
        'Seamless Integration'
      ]"
      :button="{
        label: 'Upgrade Now',
        color: 'secondary',
        to: '/fit',
        // color: 'secondary' 
      }"
      orientation="horizontal"
      tagline="New V2 model"
      terms="secured with Stripe"
    />
  </template>
  