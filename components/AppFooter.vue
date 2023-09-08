<script lang="ts" setup>
const website = useWebsite()
</script>

<template>
  <footer p4>
    <p text="center gray">
      {{ website.footer.copyRight }}
    </p>
  </footer>
</template>
