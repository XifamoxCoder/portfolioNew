<script setup lang="ts">
import {ISkill} from '../stores/SkillsStore.ts'

interface Props {
  skill: ISkill
}

const props = defineProps<Props>()

</script>

<template>
  <div class="skill-card">

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3355_151)">у
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48 8.82656L2.67188 12L6.48 15.1734C6.69191 15.3431 6.79562 15.614 6.75116 15.8818C6.7067 16.1496 6.52101 16.3724 6.26565 16.4645C6.01028 16.5566 5.7251 16.5034 5.52 16.3256L1.02 12.5756C0.849057 12.4331 0.750225 12.2221 0.750225 11.9995C0.750225 11.777 0.849057 11.5659 1.02 11.4234L5.52 7.67344C5.83843 7.40834 6.31147 7.45157 6.57656 7.77C6.84166 8.08843 6.79843 8.56147 6.48 8.82656V8.82656ZM22.98 11.4234L18.48 7.67344C18.274 7.50195 17.9922 7.45338 17.7407 7.54603C17.4892 7.63867 17.3062 7.85846 17.2607 8.12259C17.2152 8.38672 17.314 8.65508 17.52 8.82656L21.3281 12L17.52 15.1734C17.3081 15.3431 17.2044 15.614 17.2488 15.8818C17.2933 16.1496 17.479 16.3724 17.7344 16.4645C17.9897 16.5566 18.2749 16.5034 18.48 16.3256L22.98 12.5756C23.1509 12.4331 23.2498 12.2221 23.2498 11.9995C23.2498 11.777 23.1509 11.5659 22.98 11.4234V11.4234ZM15.2559 3.045C15.069 2.97712 14.8627 2.98629 14.6825 3.07051C14.5022 3.15472 14.3629 3.30708 14.295 3.49406L8.295 19.9941C8.22682 20.1812 8.23585 20.3877 8.32009 20.5681C8.40432 20.7485 8.55686 20.8881 8.74406 20.9559C8.82623 20.9851 8.9128 21 9 21C9.31553 21 9.59732 20.8025 9.705 20.5059L15.705 4.00594C15.7729 3.81896 15.7637 3.61267 15.6795 3.43246C15.5953 3.25225 15.4429 3.11287 15.2559 3.045V3.045Z" fill="var(--black-text)"/>
      </g>
      <defs>
        <clipPath id="clip0_3355_151">
          <rect width="24" height="24"/>
        </clipPath>
      </defs>
    </svg>

    <h1 class="skill-card__title" >{{ props.skill.title }}</h1>
    <p class="skill-card__description" >{{ props.skill.description }}</p>
  </div>
</template>

<style scoped>
.skill-card {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin: 12px;
  max-width: 142px;
  min-height: 90px;
}

.skill-card__img {
  margin-top: 8px;
  max-height: 24px;
  color: #1d1e1f;
}

.skill-card__title {
  margin-top: 14px;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--black-text);
}

.skill-card__description {
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: var(--secondary-text);
}

</style>
