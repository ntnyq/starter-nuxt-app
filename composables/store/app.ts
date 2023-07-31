import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const deferredPrompt = ref<Event | any>()

  return {
    deferredPrompt,
  }
})
