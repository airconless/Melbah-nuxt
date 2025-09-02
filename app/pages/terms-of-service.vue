<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-heading mb-8">Terms of Service</h1>
      
      <div class="prose prose-lg max-w-none">
        <div class="bg-accented border border-default rounded-lg p-6 mb-8">
          <p class="text-muted">
            <strong>Last updated:</strong> {{ new Date().toLocaleDateString() }}
          </p>
        </div>

        <div class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">1. Acceptance of Terms</h2>
            <p class="text-muted">
              By accessing and using Melbah's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">2. Use License</h2>
            <p class="text-muted mb-4">
              Permission is granted to temporarily download one copy of the materials on Melbah's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul class="list-disc list-inside space-y-2 text-muted ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">3. Disclaimer</h2>
            <p class="text-muted">
              The materials on Melbah's website are provided on an 'as is' basis. Melbah makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">4. Limitations</h2>
            <p class="text-muted">
              In no event shall Melbah or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Melbah's website, even if Melbah or a Melbah authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">5. Accuracy of Materials</h2>
            <p class="text-muted">
              The materials appearing on Melbah's website could include technical, typographical, or photographic errors. Melbah does not warrant that any of the materials on its website are accurate, complete, or current. Melbah may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">6. Links</h2>
            <p class="text-muted">
              Melbah has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Melbah of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">7. Modifications</h2>
            <p class="text-muted">
              Melbah may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-semibold text-heading mb-4">8. Governing Law</h2>
            <p class="text-muted">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>
        </div>

        <div class="bg-accented border border-default rounded-lg p-6 mt-8">
          <h2 class="text-xl font-semibold text-heading mb-4">Contact Information</h2>
          <p class="text-muted">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p class="text-muted mt-2">
            Email: <a href="mailto:hello.metricdecor@gmail.com" class="text-primary hover:underline">hello.metricdecor@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms of Service - Melbah',
  meta: [
    { name: 'description', content: 'Terms of Service for Melbah products and services.' }
  ]
})
</script>
