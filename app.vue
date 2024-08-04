<script lang="ts" setup>
import { inputValue } from '#imports'
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
