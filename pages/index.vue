<script setup>
import { ref } from 'vue'

const stats = ref([
    {
        Title: 'Need a help in Claim?',
        msg: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
    },
    {
        Title: 'Статистика',
        msg: 'Статистика за период (01.11.2022 - 22.01.2023)',
    },
    {
        Title: 'Статистика',
        msg: 'Статистика за период (22.01.2023 - 01.11.2023)',
    },
    {
        Title: 'Статистика',
        msg: 'Статистика за период (01.11.2023 - 22.01.2024)',
    },
])
</script>

<template>
    <div>

        <!-- lg:w-1/3 xl:w-1/4 -->
        <div class="flex flex-wrap">
            <div v-for="stat in stats" :key="stat.Title" class="w-full md:w-1/2 m-auto pl-4 pr-4 pt-4"> 
                <AppCart class="mt-0"
                    :Title=stat.Title
                    :msg=stat.msg
                /> 
            </div>
        </div>

        <AppPagination/>
    </div>
</template> 




