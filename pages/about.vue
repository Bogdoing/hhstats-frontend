<script setup>
import { ref } from 'vue'
import axios from 'axios'


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
            fetchMsg.value = JSON.stringify(json, null, 2);
        }) 
}

</script>

<template>
    <div class="bg-white dark:bg-bgDtfDark">
        <!-- <div class="p-3 border-2 border-gray-900
            dark:bg-bgDtfDark dark:text-TxtDark dark:border-gray-400">
            <h3 class="text-xs">font-serif</h3>
            <p class="font-serif">
                Fetch DATA
                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
            </p>
        </div>

        <div class="p-2 bg-white border-b-2 border-l-2 border-r-2 border-gray-900
            dark:bg-bgDtfDark dark:text-TxtDark dark:border-gray-400">
            <div class="flex justify-center">
                <AppBtn NAME='count++'/>
                <AppBtn NAME='fetchData' @click="fetchData"/>
                <AppBtn NAME='fethJson'  @click="fethJson"/>
            </div>
            <div class="flex justify-center mt-2">
                <AppBtn NAME='count++'   @click="count++"   disabled/>
                <AppBtn NAME='fetchData' @click="fetchData" disabled/>
                <AppBtn NAME='fethJson'  @click="fethJson"  disabled/>
            </div>
        </div> -->
        

        <!-- <pre class="
            p-10 text-xl italic font-semibold text-gray-600 dark:text-white
            border-b-2 border-l-2 border-r-2 border-gray-900
            dark:bg-gray-800 dark:text-gray-200 dark:border-gray-400
            ">
            <p class="text-sm">{{ count }}</p>
            <p class="">{{ fetchMsg }}</p>
        </pre> -->

        

    </div>

</template>

<style scoped>

</style>
