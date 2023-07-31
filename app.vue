<script setup lang="ts">
import { useAppStore } from '~/composables/store/app'

const appStore = useAppStore()

const handleInstall = () => {
  const deferredPrompt = appStore.deferredPrompt
  // Show the install prompt
  deferredPrompt?.prompt()
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult: any) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }
  })
}
</script>

<template>
  <VitePwaManifest />
  <div class="min-h-screen flex flex-column justify-center items-center">
    <h1 class="text-5xl">Hello world</h1>
    <div
      v-if="appStore.deferredPrompt"
      class="mt-6 text-center"
    >
      <button
        @click="handleInstall"
        class="shadow text-white bg-green-500 px-4 py-2 m-2 rounded-md font-bold"
        type="button"
      >
        Install
      </button>
    </div>
  </div>
</template>
