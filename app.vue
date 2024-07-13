<script lang="ts" setup>
const location = useBrowserLocation()

const DEFAULT_INPUT = 'hello world'

const inputValue = ref('')

const rawUrlState = import.meta.client ? atou(location.value.hash!.slice(1)) : undefined
const urlState = rawUrlState && JSON.parse(rawUrlState)

// if (rawUrlState) {
//   inputValue.value = urlState?.i || DEFAULT_INPUT
// }

inputValue.value = urlState?.i || DEFAULT_INPUT

if (import.meta.client) {
  watchEffect(() => {
    const i = inputValue.value === DEFAULT_INPUT ? '' : inputValue.value
    const serialized = JSON.stringify({
      i,
    })
    location.value.hash = utoa(serialized)
  })
}
</script>

<template>
  <div
    flex="~ col"
    h-screen
  >
    <NavBar />

    <main class="flex-1 of-y-auto">
      <div
        flex="~ auto"
        min-h-0
        h-full
        justify-center
        items-center
        p4
      >
        <input
          v-model="inputValue"
          type="text"
          class="max-w-420px w-full border border-gray-300 rounded-lg p-2 px-4 text-lg shadow-sm transition duration-150 ease-in-out"
        />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
