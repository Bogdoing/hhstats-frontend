<script lang="ts" setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { datalabelsBar } from '~/utils/datalabels'

import type { LangDataGit } from '~/types/LangDataGit';

ChartJS.register(ChartDataLabels, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const props = defineProps({
    color: String
})

const getGitData: LangDataGit[] = await useGetGitData('2024-02-04')


getGitData.sort((a, b) => Number(b.count) - Number(a.count));
const chartData = ref({
  labels: getGitData.map(item => item.lang), 
  datasets: [
    {
      label: `Статистика GitHub за ${getGitData[0].data} `,
      backgroundColor: props.color || '#2dd4bf',
      borderColor: props.color || '#115e59',
      hoverBackgroundColor  : '#0f766e',
      data: getGitData.map(item => Number(item.count)), 
    },
  ],
  datalabels: {
    align: 'end',
    anchor: 'end'
  }
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
      y: {
        title: {
          display: true,
          text: 'Названия языка программирования',
          font: {
            size: 15
          }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Количество открытых репозиториев',
          font: {
            size: 15
          }
        }
      }
  },
  plugins: {
    datalabels: datalabelsBar
  }
})

</script>
<template>
  <div class="m-3 md:mx-16 rounded-lg shadow">
    <!-- <h1 class="dark:text-white ">Test/chart</h1> -->

    <div class="h-96" id="chart">
        <Bar
        :data="chartData"
        :options="chartOptions"
        />
    </div>

  </div>
</template>

<style scoped lang="css">
</style>