<script lang="ts" setup>
import { ref } from 'vue'
import { languages } from '~/types/Langs'

const langs = ref(languages)

const allLeng = await useGetAllLeng()
let allRegion = await useGetAllRegion()
allRegion = allRegion.map(
    i => i = i.region
)
let input = ref({
    lang: allLeng[0] || '',
    region: allRegion[0] || '1'
})

</script>

<template>
    <div class="">
        <form class="pt-4 pr-4 pl-4 max-w-sm mx-auto">
            <div class="">
                <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Регион</label>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="input.region" id="region">
                    <option v-for="region in allRegion">
                        {{ region }}
                    </option>
                </select>
            </div>
        </form>

        <div class="flex flex-wrap">
            <div class="w-1/2 sm:w-1/3 lg:w-1/4"
            v-for="lang in langs">
                <div class="">
                    <ChartPredict :key="input.region" :lang="lang" :region="input.region"/>                   
                </div>
            </div>
        </div>

    </div>
</template>