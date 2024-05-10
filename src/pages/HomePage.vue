<script setup lang="ts">
import Button from "../components/Button.vue";
import ProjectCard from "../components/ProjectCard.vue";
import SkillCard from "../components/SkillCard.vue";
import {useProjectsStore} from "../stores/ProjectsStore.ts";
import {useSkillsStore} from "../stores/SkillsStore.ts";
import Title from "../components/Title.vue";

const projectsStore = useProjectsStore()
const skillsStore = useSkillsStore()

</script>

<template>
  <div class="container">
    <div class="info_block">
      <img src="../assets/backgroundImg.jpg" alt="Фон" class="info_block__background">
      <div class="info_block_items">
        <h1 class="info_block_items__title">I'm a front-end programmer</h1>
        <p class="info_block_items__description">I design and build beautiful websites that are easy to use.</p>
        <div class="info_block_items__input_container">
          <img class="info_block_items__input_icon" src="../assets/searchIcon.png" alt="Поиск">
          <input type="text" placeholder="Search for a project" class="info_block_items__input">
          <Button>Find Project</Button>
        </div>
      </div>
    </div>

    <div class="projects_block">
      <Title>My Projects</Title>
      <div class="projects_block_items">
        <ProjectCard v-for="project in projectsStore.projects" :project="project" :key="project.id" />
      </div>
    </div>

    <div class="skills_block">
      <Title>Tech Stack</Title>
      <div class="skills_block_items">
        <SkillCard v-for="skill in skillsStore.skills" :skill="skill" :key="skill.id" />
      </div>
    </div>

  </div>

  <div class="footer">
    <h1 class="footer__text">Copyright</h1>
  </div>



</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1032px;
  margin: 0 auto;
}

.info_block {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 1020px;
}

.info_block__background {
  z-index: -1;
}

.info_block_items {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info_block_items__title {
  text-align: center;
  font-family: "Manrope", sans-serif;
  font-size: 48px;
  font-weight: 1000;
  line-height: 60px;
  color: var(--white-text);
}

.info_block_items__description {
  text-align: center;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: var(--white-text);
  margin-bottom: 32px;
}

.info_block_items__input_container {
  border-radius: 12px;
  padding: 8px 22px;
  display: flex;
  align-items: center;
  max-height: 64px;
  max-width: 480px;
  background-color: var(--white-text)
}

.info_block_items__input_icon {
  width: 20px;
  height: 20px;
}

.info_block_items__input {
  margin-left: 16px;
  margin-right: 40px;
  border: none;
  height: 20px;
  background-color: var(--white-text);
  color: var(--dark-color);

  &:focus,&:active {
    outline: none;
  }
}


.projects_block_items {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

.skills_block_items {
  display: flex;
  flex-wrap: wrap;
}

.footer {
  margin-top: 32px;
  height: 68px;
  background-color: var(--dark-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__text {
  font-family: "Manrope", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--white-text);
}

</style>
