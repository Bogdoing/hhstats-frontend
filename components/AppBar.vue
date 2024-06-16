<script>

</script>

<template>
    <div class="fixed w-full z-20 top-0 start-0">
        <nav class="bg-white  border-gray-200 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">STATS</span>
                </NuxtLink>
                <div class="flex items-center space-x-6 rtl:space-x-reverse">
                    <NuxtLink to="/test">
                        <button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" >
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </nav>

        <!-- <nav class="bg-gray-50 dark:bg-gray-700">
            <div class="max-w-screen-xl px-4 py-3 mx-auto">
                <div class="flex items-center">
                    <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <NuxtLink to="/" class="text-gray-900 dark:text-white hover:underline">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="text-gray-900 dark:text-white hover:underline">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/parser" class="text-gray-900 dark:text-white hover:underline">Parser</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> -->
    </div>




</template>

<style scoped>
/* .fixed {
    position: sticky;
    top: 0;
} */
</style>