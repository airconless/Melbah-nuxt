<template>
  <UPage>
    <UPageHeader title="Installation Guide" description="Step-by-step installation guide for installing Wireless charging on your Mercedes w204, w212, w207 and x204" />

    <UPageBody>
      <div class="mb-8">
        <div class="relative w-full" style="padding-bottom: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/dL8qrfC-Wag?start=31"
            title="Installation Guide Video"
            class="absolute top-0 left-0 w-full h-full rounded-lg border border-default"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div class="bg-accented border border-default rounded-lg p-6 mb-8">
        <h2 class="text-xl font-semibold text-heading mb-4 flex items-center">
          <UIcon name="i-lucide-info" class="w-5 h-5 mr-2" />
          Before You Begin
        </h2>
        <ul class="list-disc list-inside space-y-2 text-muted">
          <li>Models: W204, W212, W207, X204</li>
          <li>Park safely, on flat surface</li>
        </ul>
        <div class="mt-4">
          <h3 class="text-lg font-semibold text-heading mb-2">Tools</h3>
          <ul class="list-disc list-inside space-y-1 text-muted">
            <li>Torx screwdriver (included in the kit)</li>
          </ul>
        </div>
      </div>

      <div class="space-y-8">
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">1) Remove center console trim</h3>
          <p class="text-muted mb-4">Carefully pry up the gear shifter surround. Lift slowly and disconnect any attached connectors.</p>
        </div>
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">2) Remove ashtray/cupholder unit</h3>
          <p class="text-muted mb-4">Undo the T20 Torx screws securing the assembly. Slide it out and unplug the harnesses.</p>
        </div>
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">3) Prepare and place the wireless charger</h3>
          <p class="text-muted mb-4">Connect the charger. Seat the charger where the ashtray was, ensuring a flush fit.</p>
        </div>
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">4) Test before reassembly</h3>
          <p class="text-muted mb-4">Turn ignition on and place your phone on the pad. Confirm charging starts. Reseat connections if not.</p>
        </div>
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">5) Reassemble trim</h3>
          <p class="text-muted mb-4">Install screws again. Reinstall trim. Press the shifter surround back into place.</p>
        </div>
        <div class="border border-default rounded-lg p-6">
          <h3 class="text-xl font-semibold text-heading mb-3">6) Final checks</h3>
          <p class="text-muted mb-4">Verify wireless charging and ensure trim is secure with no rattles.</p>
        </div>
      </div>

      <div class="bg-accented border border-default rounded-lg p-6 mt-8">
        <h2 class="text-xl font-semibold text-heading mb-4 flex items-center">
          Need Help?
        </h2>
        <p class="text-muted mb-4">Questions or issues? We're here to help.</p>
        <UButton
          to="mailto:hello.metricdecor@gmail.com"
          color="primary"
          variant="outline"
          icon="i-lucide-mail"
        >
          Contact Support
        </UButton>
      </div>
    </UPageBody>
    <template #left>
      <div></div>
    </template>
    <template #right>
      <div></div>
    </template>
  </UPage>
</template>

<script setup lang="ts">
// No script state required for this static guide

useHead({
  title: 'Installation Guide - Mercedes wireless charger',
  meta: [
    { name: 'description', content: 'Step-by-step installation guide for installing Wireless charging on your Mercedes w204, w212, w207 and x204' }
  ]
})
</script>
