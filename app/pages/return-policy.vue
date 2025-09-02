<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-heading mb-8">Return Policy</h1>
      
      <div class="prose prose-lg max-w-none">
        <div class="bg-accented border border-default rounded-lg p-6 mb-8">
          <p class="text-muted">
            <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">Return Eligibility</h2>
            <p class="text-muted mb-4">
              We want you to be completely satisfied with your Melbah purchase. You may return most items within 30 days of delivery for a full refund.
            </p>
            <div class="bg-accented border border-default rounded-lg p-4">
              <h3 class="font-semibold text-heading mb-2">Items eligible for return:</h3>
              <ul class="list-disc list-inside space-y-1 text-muted">
                <li>Unopened products in original packaging</li>
                <li>Products with manufacturing defects</li>
                <li>Items that arrived damaged during shipping</li>
                <li>Products that don't match the description</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">Return Process</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 class="font-semibold text-heading mb-2">Contact Us</h3>
                  <p class="text-muted">Email us at <a href="mailto:hello.metricdecor@gmail.com" class="text-primary hover:underline">hello.metricdecor@gmail.com</a> with your order number and reason for return.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 class="font-semibold text-heading mb-2">Get Return Authorization</h3>
                  <p class="text-muted">We'll provide you with a Return Merchandise Authorization (RMA) number and return instructions.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 class="font-semibold text-heading mb-2">Package and Ship</h3>
                  <p class="text-muted">Package the item securely in its original packaging and ship it back to us using the provided return label.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 class="font-semibold text-heading mb-2">Receive Refund</h3>
                  <p class="text-muted">Once we receive and inspect your return, we'll process your refund within 5-7 business days.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">Refund Information</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-accented border border-default rounded-lg p-4">
                <h3 class="font-semibold text-heading mb-2">Refund Timeline</h3>
                <ul class="list-disc list-inside space-y-1 text-muted text-sm">
                  <li>Processing: 5-7 business days</li>
                  <li>Credit card: 3-5 business days</li>
                  <li>PayPal: 1-2 business days</li>
                  <li>Bank transfer: 5-10 business days</li>
                </ul>
              </div>
              <div class="bg-accented border border-default rounded-lg p-4">
                <h3 class="font-semibold text-heading mb-2">Refund Amount</h3>
                <ul class="list-disc list-inside space-y-1 text-muted text-sm">
                  <li>Full refund for eligible items</li>
                  <li>Original shipping costs included</li>
                  <li>Return shipping on us for defects</li>
                  <li>Customer pays return shipping for other returns</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">Non-Returnable Items</h2>
            <div class="bg-accented border border-default rounded-lg p-4">
              <p class="text-muted mb-2">The following items cannot be returned:</p>
              <ul class="list-disc list-inside space-y-1 text-muted">
                <li>Custom or personalized items</li>
                <li>Items damaged by misuse or normal wear</li>
                <li>Items returned after 30 days</li>
                <li>Items without original packaging</li>
                <li>Digital products or downloads</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">Exchanges</h2>
            <p class="text-muted">
              We currently do not offer direct exchanges. If you need a different size, color, or model, please return the original item and place a new order. This ensures you receive the most current pricing and availability.
            </p>
          </section>
        </div>

        <div class="bg-accented border border-default rounded-lg p-6 mt-8">
          <h2 class="text-xl font-semibold text-heading mb-4">Questions About Returns?</h2>
          <p class="text-muted mb-4">
            If you have any questions about our return policy or need assistance with a return, please don't hesitate to contact us.
          </p>
          <UButton 
            to="mailto:hello.metricdecor@gmail.com" 
            color="primary" 
            variant="outline"
            icon="i-lucide-mail"
          >
            Contact Support
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Return Policy - Melbah',
  meta: [
    { name: 'description', content: 'Return policy for Melbah products and services.' }
  ]
})
</script>
