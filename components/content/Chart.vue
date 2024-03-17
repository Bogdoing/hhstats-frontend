<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs'


const chartData = ref({
  labels: ['labels', '2'],
  datasets: [
    {
        label: 'label',
        backgroundColor: '#2dd4bf',
        borderColor: '#115e59',
        hoverBackgroundColor  : '#115e59',
        data: ['data', '2'], 
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})


</script>
<template>
  <div class="m-2 rounded-md shadow border-4 border-gray-200 dark:border-gray-700 hover:shadow-lg">
    <!-- <div class="h-96" id="chart"> -->
    <div class="h-48" id="chart">
        <Line
        :data="chartData"
        :options="chartOptions"
        />
    </div>    
  </div>
  
</template>

<style scoped lang="css">
</style>