<script setup lang="ts">
import { ref } from 'vue'
import { languages } from '~/types/Langs'

const allLeng = await useGetAllLeng()

let allRegion = await useGetAllRegion()
allRegion = allRegion.map(
    i => i = i.region
)
let input = ref({
    lang: allLeng[0] || '',
    region : allRegion[0] || ''
})

</script>

<template>

    <br>
    <div>
        <form class="pr-4 pl-4 max-w-sm mx-auto">
            <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="input.region" id="default">
                <option v-for="region in allRegion">
                    {{ region }}
                </option>
            </select>
        </form>

        <ChartJsonMultiLine :key="input.region" :lang=allLeng  region="113" />

    </div>

</template>