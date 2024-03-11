<script setup>
import { ref } from 'vue'
import axios from 'axios'

defineProps({
    msg: String,
})

const count = ref(0)
let fetchMsg = ref("fetchMsg")

function fetchData() {
    //axios.get('https://serverless-node-template.vercel.app') 
    axios.get('https://serverless-node-template.vercel.app/api/v1/emojis') 
    //axios.get('https://serverless-postgres-template.vercel.app/api/v1/books/')  
        .then(response => {
        fetchMsg.value = response.data;
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
}
function fethJson(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            fetchMsg.value = JSON.stringify(json, null, 2); // JSON.stringify(this.jsonData, null, 2);
        }) 
}

</script>

<template >

    <div class="font-semibold">

        <div class="p-3 bg-white border-2 border-gray-900">
            <h3 class="text-xs ">font-serif</h3>
            <p class="font-serif">
                {{ msg }}
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
            </p>
        </div>

        <div class="p-2 bg-white border-b-2 border-l-2 border-r-2 border-gray-900">
            <div class="flex justify-center">
                <button type="button" @click="count++"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    count++ {{ count }}
                </button>
                <button type="button" @click="fetchData"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    fetchData
                </button>
                <button type="button" @click="fethJson"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    fethJson
                </button>
            </div>
            <div class="flex justify-center mt-2">
                <button type="button" @click="count++"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    count++ {{ count }}
                </button>
                <button type="button" @click="fetchData"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    fetchData
                </button>
                <button type="button" @click="fethJson"
                    class="py-2.5 px-5 me-2 mb-0 text-sm font-medium 
                    text-gray-900 focus:outline-none bg-white border border-gray-900
                    hover:bg-gray-10 hover:border-gray-400 
                    dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-900 dark:border-gray-900 dark:hover:text-white dark:hover:bg-gray-900">
                    fethJson
                </button>
            </div>
        </div>
        


        <!-- <pre class="
            p-10 text-xl italic font-semibold text-gray-600 dark:text-white
            border-b-2 border-l-2 border-r-2 border-gray-900
            ">
            <p class="">{{ fetchMsg }}</p>
        </pre> -->

    </div>
</template>

<style scoped>

</style>
