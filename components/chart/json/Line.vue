<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs'

const props = defineProps({
    color: String,
    lang: String,
    region: String
})

const datas = await useGetHHLangRegion(props.lang, props.region);

const LangVacancies = datas//getVacanciesByLanguage(chart, props.lang, props.region); 

const chartData = ref({
  labels: LangVacancies.map(item => { return item.data; }),
  datasets: [
    {
        label: 'Lang - ' + LangVacancies[0].lang.split(" ")[0] + ' | Region - ' + LangVacancies[0].region,
        backgroundColor: props.color || '#2dd4bf',
        borderColor: props.color || '#115e59',
        hoverBackgroundColor  : '#115e59',
        data: LangVacancies.map(item => { return item.vac; }), 
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

// function getVacanciesByLanguage(data, language, region) { 
//   const vacancies = []; 
//   for (const date in data) { 
//     for (const vacancy of data[date]) { 
//       if (vacancy.lang === language && vacancy.region === region) { 
//         vacancies.push(vacancy); 
//       } 
//     } 
//   } 
//   return vacancies; 
// }


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