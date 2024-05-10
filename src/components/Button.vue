<script setup lang="ts">
</script>

<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<style scoped>
.btn {
  font-family: "Manrope", sans-serif;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--white-text);
  border-radius: 12px;
  max-width: 135px;
  max-height: 48px;
  padding: 12px 20px;
  background-color: var(--btn-color);
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
}

</style>
