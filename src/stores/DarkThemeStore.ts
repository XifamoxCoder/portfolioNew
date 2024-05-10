import {defineStore} from 'pinia'
import {ref} from "vue";


export const useDarkThemeStore = defineStore('darkThemeStore', () => {
  const darkTheme = ref<any>(true)

  return {
    darkTheme
  }
})