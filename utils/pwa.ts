/**
 * @file install PWA
 */

import { isClient } from '@vueuse/core'
import { useAppStore } from '~/composables/store/app'

/**
 * - https://web.dev/customize-install/#detect-install
 * - [Trigger installation from your PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
 * @returns
 */
export function installPrompt() {
  if (!isClient) return

  const app = useAppStore()

  window.addEventListener('beforeinstallprompt', evt => {
    // Prevent the mini-infobar from appearing on mobile
    evt.preventDefault()

    // Stash the event so it can be triggered later.
    app.deferredPrompt = evt

    // Update UI notify the user they can install the PWA
    // showInstallPromotion()
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`"beforeinstallprompt" event was fired.`)
  })

  window.addEventListener('appinstalled', () => {
    // Hide the app-provided install promotion
    // hideInstallPromotion()
    // Clear the deferredPrompt so it can be garbage collected
    app.deferredPrompt = null
    // Optionally, send analytics event to indicate successful install
    console.log('PWA was installed')
  })
}
