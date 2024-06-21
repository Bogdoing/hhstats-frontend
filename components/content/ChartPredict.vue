<script lang="ts" setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs';
import { type LangData } from '../types/LangData';

const props = defineProps({
    color: String,
    lang: String,
    region: String,
    mod: String
})

let predictData: LangData = await useGetPHHLangRegion(
  props.lang || 'Dart',
  props.region || '1'
)
let LangVacancies: LangData[] = await useGetHHLangRegion(
  props.lang   || 'php',
  props.region || '1'
);
LangVacancies.push(predictData) // add predict data


const chartData = ref({
  labels: LangVacancies.map(item => { return item.data; }),
  datasets: [
    {
      label: 'Lang - ' + LangVacancies[0].lang.split(" ")[0] ,//+ ' | Region - ' + LangVacancies[0].region,
      backgroundColor: lastColor(LangVacancies.length-1, props.color || '#2dd4bf', '#8b00ff'),// '#2dd4bf', '#8b00ff' \\ #8134DF
      borderColor: '#115e59',
      hoverBackgroundColor  : '#115e59',
      data: LangVacancies.map(item => {
        // console.log(props.mod)
        switch (props.mod) {
        case 'Колличество вакансий':
          return item.vac
          break;
        case 'Колличество резюме':
          return item.res
          break;
        case 'Отношение вакансий к резюме':
          return (item.vac/item.res)*100
          // data = LangVacancies.map(item => { return (item.res/item.vac); })
          break;
        default:
          return item.vac
    }
        
      }), 
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: datalabelsLine
  },
  scales: getScales(props.mod, 'Дата')
})

function lastColor(len: number, color1: string, color2: string) {
  let backgroundColor: Array<string> = [];
  for (let i = 0; i < len; i++) {
    backgroundColor[i] = color1;
  }
  backgroundColor[len] = color2
  return backgroundColor
}



</script>
<template>
  <div class="m-2 rounded-md shadow border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg">
    <div class="h-72" id="chart">
    <!-- <div class="h-48" id="chart"> -->
        <Line
        :data="chartData"
        :options="chartOptions"
        />
    </div>    
  </div>
</template>

<style scoped lang="css">
</style>