<script setup>
import { ref } from 'vue'

const products = ref([
    { id: 1, name: "Product 1", description: "Description of Product 1" },
    { id: 2, name: "Product 2", description: "Description of Product 2" },
    { id: 3, name: "Product 3", description: "Description of Product 3" },
    { id: 4, name: "Product 4", description: "Description of Product 4" }
])


</script>

<template>
    <div>
        
        <AppBarTest/>
        
    </div>
</template>
