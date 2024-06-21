<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
import { datalabelsPie } from '#imports';

import { Pie } from 'vue-chartjs'

const props = defineProps({
  region: String,
  lang: Array,
  mod: String
})
let allData = filterArrayByVac(await useGetHHDataRegion('2024-01-10', '113'))

let summ = 0
for (let i = 0; i < allData.length; i++){
  summ += allData[i].vac
}
const c = allData.map(item => {
  if (item.lang == '1C') return item.vac / summ * 100;
})
const data = allData[0].data 

let mod = '1'
if (props.mod == '0') {
  allData.map(item => { return item.vac/summ*100; })
}
else if (props.mod == '1') {
  allData = allData.filter(item =>
    // item.lang.includes('Vue') ||
    item.lang === ('Vue') ||
    item.lang === 'React'     ||
    item.lang === 'Angular'
  )
  summ = allData.map(item => { return item.vac }).reduce((acc, curr) => acc + curr, 0)
  allData.map(item => { return item.vac / summ * 100; })
}

const chartData = ref({
  labels: allData.map(item => { return item.lang.split(' ')[0] + ' - ' + (item.vac/summ*100).toFixed(3); }),
  // datasets: [
  //   {
  //     label: 'Lang - ' + allData[0].lang.split(' ')[0],
  //     data: allData.map(item => { return item.vac/summ*100; }),
  //     backgroundColor: allData.map(item => {
  //       if (item.lang == '1C') return '#115e59'//'rgb(255, 205, 86)'
  //       return '#2dd4bf'//'rgb(255, 205, 255)'
  //     }),
  //     borderColor: '#115e59',
  //     hoverOffset: 20
  //   }
  // ]
  datasets: [
    {
      label: 'Lang - ' + allData[0].lang.split(' ')[0],
      data: allData.map(item => { return item.vac/summ*100; }),
      backgroundColor: allData.map(item => {return getColorsBgByLanguages(item.lang)}),
      borderColor: allData.map(item => {return getColorsByLanguages(item.lang)}),
      hoverOffset: 20
    }
  ]

});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: datalabelsPie
  }
})

function filterArrayByVac(arr) {
  return arr.filter(item => item.vac > 0).sort((a, b) => b.vac - a.vac)
}
</script>

<template>
  <div class="m-2 md:mx-16 rounded-lg shadow">
    <!-- <div class="h-screen" id="chart"> -->
    <div class="h-96" id="chart">
        <Pie :data="chartData" :options="chartOptions"/>
    </div>      
  </div>

  <div v-if="props.mod  === '0'"
  class="flex justify-center items-center">
    <div class="m-6 text-center">
      <p class=""> На момент {{ data }} "1С" занимает <span>≈{{ c[0].toFixed(4) }}%</span> рынка </p>
    </div>
  </div>
  
  
</template>

<style scoped lang="css">
</style>