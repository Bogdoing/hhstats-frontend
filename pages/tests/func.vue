<script setup lang="ts">
import type { LangData } from '~/types/LangData';
import type { LangDataGit } from '~/types/LangDataGit';

const allLeng = await useGetAllLeng()

const allRegion = ['1', '26', '113']

// let langInput = ref(allLeng[0] || '')
// let regionInput = ref(allRegion[0] || '')

let input = ref({
    lang: allLeng[0] || '',
    region : allRegion[0] || ''
})

// let msg = ref(regionInput)

</script>

<template>
    <div class="dark:text-white mt-2">        

        <form class="pr-4 pl-4 max-w-sm mx-auto">
            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lang</label>
            <select class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="input.lang" id="small">
                <option v-for="leng in allLeng">
                    {{ leng }}
                </option>

            </select>
            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="input.region" id="default">
                <option v-for="region in allRegion">
                    {{ region }}
                </option>
            </select>
        </form>
        
        <textarea v-model="input" id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        <Chart :key="input.lang || input.region" :region=input.region :lang=input.lang />

        <ChartPredict :key="input.lang" :lang=input.lang :region=input.region />

    </div>



</template>