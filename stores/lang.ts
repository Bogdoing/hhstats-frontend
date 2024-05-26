import { defineStore } from 'pinia'
import type { languages } from '~/types/Langs'

// export const useLangStore = defineStore('langs', {
//     state: () => ({
//         langs: 0,
//     }),
// })

export const useLangStore = defineStore('langs', {
    state: () => {
        return {
            //langs: [],
            someState: 'hello pinia',
      }
    },
    getters: {
        getTest: (state) => 123,
        //getLangs: (state) => state.langs,
    }
})