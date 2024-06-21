<script lang="ts" setup>
import { ref } from 'vue'
import { languages } from '~/types/Langs'

const langs = ref(languages)

//Select mode chart
const mode = [
    'Колличество вакансий',
    'Колличество резюме',
    'Отношение вакансий к резюме'
]

const allLeng = await useGetAllLeng()
let allRegion = await useGetAllRegion()
allRegion = allRegion.map(
    i => i = i.region
)
let input = ref({
    lang: allLeng[0] || '',
    region: allRegion[0] || '1',
    mode: mode[0]
})

</script>

<template>
    <div class="">
        <form class="pt-4 pr-4 pl-4 max-w-sm mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div class="">
                <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Регион</label>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="input.region" id="region">
                    <option v-for="region in allRegion">
                        {{ region }}
                    </option>
                </select>
            </div>
            <div class="lg:flex lg:flex-col">
                <label for="mode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Режим</label>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="input.mode" id="mode">
                    <option v-for="mod in mode">
                        {{ mod }}
                    </option>
                </select>
            </div>
        </form>

        <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2"
            v-for="lang in langs">
                <div class="">
                    <ChartPredict 
                        :key="`${input.region}-${input.mode}`"  
                        :lang="lang" 
                        :region="input.region" 
                        :mod=input.mode />                 
                </div>
            </div>
        </div>
        

    </div>
</template>