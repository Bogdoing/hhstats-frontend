<script lang="ts" setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { PointElement, LineElement} from 'chart.js'
ChartJS.register(Title, PointElement, LineElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
        
import { Line } from 'vue-chartjs';
import { type LangData } from '../types/LangData';
import { useTest } from '~/composables/test/useTest';

const props = defineProps({
    color: String,
    lang: String,
    region: String
})

const predictData: LangData = {
  id: 3,
  lang: props.lang,
  vac: 300,
  vacref: "ref3",
  res: "res3",
  region: props.region,
  data: '2024-06-22',
};

let LangVacancies = await useGetHHLangRegion(
  props.lang   || 'php',
  props.region || '1'
); 
// LangVacancies[LangVacancies.length + 1] =
LangVacancies.push(predictData)

const chartData = ref({
  labels: LangVacancies.map(item => { return item.data; }),
  datasets: [
    {
      label: 'Lang - ' + LangVacancies[0].lang.split(" ")[0] + ' | Region - ' + LangVacancies[0].region,
      backgroundColor: lastColor(15, '#2dd4bf', '#8b00ff'),//props.color || '#2dd4bf',
      borderColor: '#115e59',
      hoverBackgroundColor  : '#115e59',
      data: LangVacancies.map(item => { return item.vac; }), 
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
})

function lastColor(len: number, color1: string, color2: string) {
  let backgroundColor: Array<string> = [];
  for (let i = 0; i < len; i++) {
    backgroundColor[i] = color1;
  }
  backgroundColor[len] = color2
  return backgroundColor
}

function addChartPredictData() {
  
}

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