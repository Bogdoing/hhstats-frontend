<script setup>
defineProps({
    NAME: String,
})
</script>

<template>
    <!-- <button type="button" 
        class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
        text-gray-200 focus:outline-none bg-white border border-gray-900
        hover:bg-gray-10 hover:border-gray-400 
        dark:focus:ring-gray-100
        dark:bg-btnBlueDark dark:border-gray-400 
        dark:hover:text-white dark:hover:bg-btnTyBlueDark">
        {{ NAME }}
    </button> -->

    <button type="button" 
        class="text-white bg-btnBlueDark
            hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
            dark:bg-btnBlueDark dark:hover:bg-btnTyBlueDark
            focus:outline-none dark:focus:ring-blue-800">
        {{ NAME }}
    </button>
</template>

<style scoped>
</style>
