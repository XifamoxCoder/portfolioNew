<script setup lang="ts">
</script>

<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<style scoped>
.title {
  margin: 32px 0;
  font-family: "Manrope", sans-serif;
  color: var(--black-text);
  line-height: 45px;
  font-size: 36px;
  font-weight: 1000;
}


</style>
