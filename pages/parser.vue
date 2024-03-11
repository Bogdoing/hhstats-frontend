<script>
import { ref } from 'vue'
//import parser from '../script/parser.js'

let msgg = ref("fetchMsg")

// async function parsData(){
//     msg = await parser('1')
//     console.log(res)
// }

</script>

<template>
    <div class="bg-white dark:bg-bgDtfDark text-TxtDark">
        <h1>Parse</h1>
        <pre>{{ msgg }}</pre>
        <AppBtn NAME='Pars'/>
    </div>
</template>

<style scoped>
</style>