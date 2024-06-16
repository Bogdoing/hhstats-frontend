<script setup>
import { ref } from 'vue'

const stats = ref([
    {
        Title: 'md2',
        msg: 'Статистика за период (22.01.2023 - 01.11.2023)',
    },
    {
        Title: 'md3',
        msg: 'Статистика за период (01.11.2023 - 22.01.2024)',
    },
    {
        Title: 'md',
        msg: 'Статистика за период (01.11.2023 - 22.01.2024)',
    },
    {
        Title: '1c',
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




