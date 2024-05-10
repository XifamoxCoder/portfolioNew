import {defineStore} from 'pinia'
import {ref} from "vue";

export interface IProject {
  title: string;
  description: string;
  img: string;
  id: number
}

export const useProjectsStore = defineStore('projectsStore', () => {
  const projects = ref<IProject[]>([
    {
      title: 'Project 1',
      description: 'Project 1 description',
      img: 'projectImg.png',
      id: 1
    },
    {
      title: 'Project 2',
      description: 'Project 2 description',
      img: 'projectImg.png',
      id: 2
    },
    {
      title: 'Project 3',
      description: 'Project 3 description',
      img: 'projectImg.png',
      id: 3
    },
    {
      title: 'Project 4',
      description: 'Project 4 description',
      img: 'projectImg.png',
      id: 4
    },
    {
      title: 'Project 5',
      description: 'Project 5 description',
      img: 'projectImg.png',
      id: 5
    },
    {
      title: 'Project 6',
      description: 'Project 6 description',
      img: 'projectImg.png',
      id: 6
    },
    {
      title: 'Project 7',
      description: 'Project 7 description',
      img: 'projectImg.png',
      id: 7
    },
    {
      title: 'Project 8',
      description: 'Project 8 description',
      img: 'projectImg.png',
      id: 8
    }
  ])

  return {
    projects
  }
})