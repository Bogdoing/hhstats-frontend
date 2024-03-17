<script lang="ts" setup>
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

import type { LangDataGit } from '~/types/LangDataGit';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const getGitData: LangDataGit[] = await useGetGitData('2024-02-04')


getGitData.sort((a, b) => Number(b.count) - Number(a.count));
const chartData = ref({
  labels: getGitData.map(item => item.lang), 
  datasets: [
    {
      label: `Статистика GitHub за ${getGitData[0].data} `,
      backgroundColor: '#2dd4bf',
      borderColor: '#115e59',
      hoverBackgroundColor  : '#0f766e',
      data: getGitData.map(item => Number(item.count)), 
    },
  ],
});


const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
})

</script>
<template>
  <div class="m-3 rounded-lg shadow">

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