<script lang="ts" setup></script>

<template>
  <header
    flex="~ wrap"
    shadow="~"
    border="b"
    justify-between
    items-center
    p-4
    md:px-8
  >
    <div>
      <h1
        text="xl"
        font-mono
        font-600
      >
        Starter Nuxt App
      </h1>
    </div>
    <div flex="~ gap-3">
      <button
        @click="toggleColorMode"
        p1
      >
        <div
          i-carbon:sun
          dark:i-carbon:moon
        />
      </button>
      <a
        href="https://github.com/ntnyq/starter-nuxt-app"
        target="_blank"
        rel="noopener"
        p1
      >
        <div i-carbon:logo-github />
      </a>
      <a
        href="https://twitter.com/ntnyq"
        target="_blank"
        rel="noopener"
        p1
      >
        <div i-carbon:logo-twitter />
      </a>
    </div>
  </header>
</template>
