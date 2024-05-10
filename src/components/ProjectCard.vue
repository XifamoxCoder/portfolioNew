<script setup lang="ts">

import {IProject} from '../stores/ProjectsStore.ts'

interface Props {
  project: IProject
}

const props = defineProps<Props>()
</script>

<template>
  <div class="project-card">
    <div>
      <img class="project-card__img" :src="`/src/assets/${props.project.img}`" alt="Картинка проекта">
    </div>
    <h1 class="project-card__title" >{{ props.project.title }}</h1>
    <p class="project-card__description" >{{ props.project.description }}</p>
  </div>
</template>

<style scoped>
.project-card {
  margin: 12px;
  max-width: 176px;
  max-height: 210px;
}

.project-card__img {
  border-radius: 12px;
  max-width: 176px;
  max-height: 99px;
}

.project-card__title {
  margin-top: 6px;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--black-text);
}

.project-card__description {
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: var(--secondary-text);
}

</style>
