<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs'
import chartHH from '~/assets/HH.json'

const props = defineProps({
    color: Array,
    lang: Array,
    region: String
})

let chart = ref('chartHH');
chart = chartHH

let LangVacancies = getVacanciesByLanguage(chart, props.lang[0], props.region); 

const chartData = ref({
  labels: LangVacancies.map(item => { return item.data; }),
  datasets: [],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

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
      } 
    } 
  } 
  return vacancies; 
}

function addChartDataConst(data) { 
    let abbyLang = data[0].lang.split(' ')[0]
    chartData.value.datasets.push({ 
            label: 'Lang - ' + abbyLang.split(" ")[0] + ' | Region - ' + data[0].region,
            backgroundColor: props.color || '#2dd4bf', //'#2dd4bf'
            borderColor: props.color || '#14b8a6', //'#115e59'
            hoverBackgroundColor  : '#115e59',
            data: data.map(item => { return item.vac; }), 
        }
    ); 
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
  <div class="m-2 rounded-lg shadow">
    <div class="h-screen" id="chart">
    <!-- <div class="h-96" id="chart"> -->
        <Line
        :data="chartData"
        :options="chartOptions"
        />
    </div>      
  </div>
  
</template>

<style scoped lang="css">
</style>