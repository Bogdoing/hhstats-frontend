<script>
import { ref } from 'vue'

</script>

<template >
    
    <div class="flex flex-col min-h-screen
        bg-white dark:bg-gray-800">

        <AppBar class=""/>

        <div class="flex-grow mt-28" >
            <NuxtPage/>
        </div> 

        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-700">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 
                    <a href="https://github.com/Bogdoing" class="hover:underline">Bogdoing</a>
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>


    </div>
</template>

<style>
</style>