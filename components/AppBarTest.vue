<script setup>
import { ref } from 'vue'

const navTests = ref([
    {
        Title: '/tests/chart',
        Description: 'Тестовые графики',
    },
    {
        Title: '/tests/btn',
        Description: 'Кнопки',
    },
    {
        Title: '/tests/func',
        Description: 'Кнопки',
    },
])
</script>

<template>
<div>

    <div id="mega-menu-full-dropdown" class="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
                <li v-for="navTest in navTests" :key="navTest.Title">
                    <NuxtLink 
                        :to="navTest.Title"
                        class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                        >

                        <div class="font-semibold">{{ navTest.Title }}</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            {{ navTest.Description }}
                        </span>

                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    
    

</div>
</template> 








    <!-- <div id="mega-menu-full-dropdown" class="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div> -->