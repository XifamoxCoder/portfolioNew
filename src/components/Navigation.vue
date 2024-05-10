<script setup lang="ts">
import Button from "./Button.vue";
import Switcher from "./Switcher.vue";
</script>

<template>
  <div class="nav">
    <div class="nav__logo">
      <h1>
        XifaDev
      </h1>
    </div>
    <div class="nav_items">
      <Switcher></Switcher>
      <div class="nav_items_btns">
        <div class="nav_items_btns__item">Home</div>
        <div class="nav_items_btns__item">Projects</div>
        <div class="nav_items_btns__item">Skills</div>
      </div>
      <div class="nav_items__contact">
        <Button>Contact</Button>
      </div>
      <div class="nav_items__logo">
        <img src="../assets/navLogo.png" alt="Логотип">
      </div >
    </div>
  </div>
</template>

<style scoped>
.nav_items__contact {
  display: flex;
  align-items: center;
}

.nav {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary-text);
}

.nav__logo {
  font-family: "Manrope", sans-serif;
  margin-left: 72px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 800;
  color: var(--black-text);
}

.nav_items {
  display: flex;
  gap: 32px
}

.nav_items_btns {
  display: flex;
  align-items: center;
  gap: 36px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
}

.nav_items_btns__item {
  font-family: "Manrope", sans-serif;
  color: var(--black-text);
  font-size: 14px;
  font-weight: 600;
}

.nav_items__logo {
  cursor: pointer;
  margin-right: 40px;
}

</style>
