<script setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import { datalabelsNull } from '#imports';
import { getColorsByLanguages, getColorsBgByLanguages } from '#imports';

import { Line } from 'vue-chartjs'

const props = defineProps({
  color: Array,
  lang: Array,
  region: String,
  mode: String
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
  plugins: {
    datalabels: datalabelsNull,
  },
  scales: getScales(props.mode, 'Дата')
})


async function getDataChart(){
  let datas_test = {}
  for (let i = 0; i < allData.length; i++) {
    let HHLangRegion = await useGetHHDataRegion(allData[i].data, props.region)
    // HHLangRegion.forEach(element => {
    //   if (element.lang == '1C') {
    //     console.log(
    //       "|Вакансии-" + element.lang + 
    //       "| |Резюме-" +   element.res +
    //       "| |Регион-" +    element.region + 
    //       "| |Дата-" +      element.data + "|"
    //     )
    //   }
    // });
    datas_test[i] = HHLangRegion
  }
  return datas_test
}

function getData() {
  for (let i = 0; i < props.lang.length; i++) {
    const LangVacancies = getVacanciesByLanguage(chart, props.lang[i], props.region);

    let label = LangVacancies[0].lang.split(' ')[0] + ' - ' + LangVacancies[LangVacancies.length - 1].vac 

    let data = LangVacancies.map(item => { return (item.vac); })
    switch (props.mode) {
      case 'Колличество вакансий':
        data = LangVacancies.map(item => { return (item.vac); })
        break;
      case 'Колличество резюме':
        data = LangVacancies.map(item => { return (item.res); })
        break;
      case 'Отношение вакансий к резюме':
        // data = LangVacancies.map(item => { return (item.vac/item.res)*1; })
        data = LangVacancies.map(item => { return (item.res/item.vac); })
        break;
      default:
        data = LangVacancies.map(item => { return (item.vac); })
    }
    // let data_vac_res = LangVacancies.map(item => { return (item.vac/item.res); })
    // let data = LangVacancies.map(item => { return (item.vac); })


    // addChartData(label, data_vac_res)
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
  //   chartData.value.datasets.push({ 
  //           label: label + '',
  //           backgroundColor: props.color || '#2dd4bf', //'#2dd4bf'
  //           borderColor: props.color || '#14b8a6', //'#115e59'
  //           hoverBackgroundColor  : '#115e59',
  //           data: data, 
  //       }
  // ); 
  chartData.value.datasets.push({ 
            label: label + '',
            backgroundColor: props.color || getColorsBgByLanguages(label),//'#2dd4bf', //'#2dd4bf'
            borderColor: props.color || getColorsByLanguages(label),//getRandomColor(),//'#14b8a6', //'#115e59'
            hoverBackgroundColor  : '#115e59',
            data: data, 
        }
    ); 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

</script>

<template>
  <!-- <div class="h-screen m-2 md:mx-16 rounded-lg shadow"> -->
  <div class="h-96 m-2 md:mx-16 rounded-lg shadow">
    <!-- <div class="h-screen" id="chart"> -->
    <div class="h-96" id="chart">
        <Line :data="chartData" :options="chartOptions"/>
    </div> 
  </div>


  <div class="text-xs dark:text-gray-400">
    <p v-if="props.mode === 'Отношение вакансий к резюме'">
      График показывает отношение количества резюме к количеству вакансий. 
      (Сколько человек будет претендовать на 1 вакансию "Меньше = лучше")
    </p>
    Регион - {{ props.region }}  
    <br/>
    Режим - {{ props.mode || 'null' }}  
  </div>
</template>

<style scoped lang="css">
</style>