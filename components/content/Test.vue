<script setup>
defineProps({
    name: String,
    test: String
})

</script>

<template>

    <button type="button" 
        class="text-white bg-btnBlueDark
            hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
            dark:bg-btnBlueDark dark:hover:bg-btnTyBlueDark
            focus:outline-none dark:focus:ring-blue-800">
            BTN
            {{ name }} {{ test }}
    </button>
</template>

<style scoped>
</style>
