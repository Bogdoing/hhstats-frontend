<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

import { Pie } from 'vue-chartjs'
import { all } from 'axios';

const props = defineProps({
  region: String
})
const allData = await useGetHHDataRegion('2024-01-10', '113')

let summ = 0
for (let i = 0; i < allData.length; i++){
  summ += allData[i].vac
}
const c = allData.map(item => {
  if (item.lang == '1C') return item.vac / summ * 100;
})
const data = allData[0].data 


const chartData = ref({
  labels: //['1C'],
          allData.map(item => { return item.lang; }),
  datasets: [
    {
      label: 'My First Dataset',
      data: allData.map(item => { return item.vac/summ*100; }),
      backgroundColor: allData.map(item => {
        if (item.lang == '1C') return 'rgb(255, 205, 86)'
        return 'rgb(255, 205, 255)'
      }),//['rgb(255, 205, 86)'],
      hoverOffset: 1
    }
  ]
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>

<template>
  <div class="m-2 md:mx-16 rounded-lg shadow">
    <!-- <div class="h-screen" id="chart"> -->
    <div class="h-96" id="chart">
        <Pie :data="chartData" :options="chartOptions"/>
    </div>      
  </div>

  <div class="flex justify-center items-center">
    <div class="m-6 text-center">
      <p class=""> На момент {{ data }} "1С" занимает <span>≈{{ c[0].toFixed(4) }}%</span> рынка </p>
    </div>
  </div>
  
  
</template>

<style scoped lang="css">
</style>