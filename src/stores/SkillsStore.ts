import {defineStore} from 'pinia'
import {ref} from "vue";

export interface ISkill {
  title: string;
  description: string;
  id: number
}

export const useSkillsStore = defineStore('skillsStore', () => {
  const skills = ref<ISkill[]>([
    {
      title: 'Skill 1',
      description: 'Skill 1 description',
      id: 1
    },
    {
      title: 'Skill 2',
      description: 'Skill 2 description',
      id: 2
    },
    {
      title: 'Skill 3',
      description: 'Skill 3 description',
      id: 3
    },
    {
      title: 'Skill 4',
      description: 'Skill 4 description',
      id: 4
    },
    {
      title: 'Skill 5',
      description: 'Skill 5 description',
      id: 5
    },
    {
      title: 'Skill 6',
      description: 'Skill 6 description',
      id: 6
    },
    {
      title: 'Skill 7',
      description: 'Skill 7 description',
      id: 7
    },
    {
      title: 'Skill 8',
      description: 'Skill 8 description',
      id: 8
    }
  ])

  return {
    skills
  }
})