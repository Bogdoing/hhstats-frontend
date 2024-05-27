import { defineStore } from 'pinia'
import type { languages } from '~/types/Langs'

// export const useLangStore = defineStore('langs', {
//     state: () => ({
//         langs: 0,
//     }),
// })

export const useSettingStore = defineStore('settings', {
    state: () => {
        return {
            // HOSTAPI: 'http://localhost:5000/api/v1/',
            HOSTAPI: 'http://192.168.1.64:5000/api/v1/',
        }
    },
    getters: {
        getHOSTAPI: (state) => state.HOSTAPI,
    }
})