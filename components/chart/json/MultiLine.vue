<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs'

const props = defineProps({
    color: Array,
    lang: Array,
    region: String
})
const allData = await useGetHHAllData()

let chart = await getDataChart()

let LangVacancies = getVacanciesByLanguage(chart, props.lang[0], props.region); 


const chartData = ref({
  labels: LangVacancies.map(item => { return item.data; }),
  datasets: [],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})


async function getDataChart(){
  let datas_test = {}
  for (let i = 0; i < allData.length; i++) {
    //console.log(allData[i].data)
    let HHLangRegion = await useGetHHDataRegion(allData[i].data, props.region)
    datas_test[i] = HHLangRegion
  }
  return datas_test
}

function getData() {
  for (let i = 0; i < props.lang.length; i++) {
      const LangVacancies = getVacanciesByLanguage(chart, props.lang[i], '113');

      let label = 'Lang - ' + LangVacancies[0].lang.split(' ')[0] + ' | Region - ' + LangVacancies[0].region 
      let data_vac_res = LangVacancies.map(item => { return (item.vac/item.res); })
      let data = LangVacancies.map(item => { return (item.vac); })
      //addChartData(label, data_vac_res)
      addChartData(label, data)
  }
}
getData()

function getVacanciesByLanguage(data, language, region) { 
  const vacancies = []; 
  for (const date in data) { 
    for (const vacancy of data[date]) { 
      if (vacancy.lang === language && vacancy.region === region) { 
        vacancies.push(vacancy); 
        // console.log(vacancy)
      } 
    } 
  } 
  return vacancies; 
}

function addChartData(label, data, color) { 
    chartData.value.datasets.push({ 
            label: label,
            backgroundColor: props.color || '#2dd4bf', //'#2dd4bf'
            borderColor: props.color || '#14b8a6', //'#115e59'
            hoverBackgroundColor  : '#115e59',
            data: data, 
        }
    ); 
}
</script>

<template>
  <div class="h-screen m-2 md:mx-16 rounded-lg shadow">
    <div class="h-screen" id="chart">
    <!-- <div class="h-fit" id="chart"> -->
        <Line :data="chartData" :options="chartOptions"/>
    </div>      
  </div>
  
</template>

<style scoped lang="css">
</style>