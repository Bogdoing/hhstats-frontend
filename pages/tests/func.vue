<script setup lang="ts">
import type { LangData } from '~/types/LangData';
import type { LangDataGit } from '~/types/LangDataGit';


let datasHH: LangData[];
// datas = await useGetHHLang('php');
// datas = await useGetHHDate('2024-01-10');
// datas = await useGetHHLangRegion('php', '1');
// datas = await useGetHHLangDate('Dart', '2024-01-10');

let datasGit: LangDataGit[];
// datas = await useGetGitData('2024-01-10')
// datas = await useGetGitLang('Php')
// datas = await useGetGitDateLang('2024-01-10', 'Dart')
</script>

<template>
  <div class="dark:text-white">
    <h1>Test/func</h1>

    <br>

    <ul v-for="data in datasHH">
        <ol> {{ data.id }} </ol>
        <ol> {{ data.lang }} </ol>
        <ol> {{ data.vac }} </ol>
        <ol> {{ data.vacref }} </ol>
        <ol> {{ data.res }} </ol>
        <ol> {{ data.region }} </ol>
        <ol> {{ data.data }} </ol>
        <br/>
    </ul>

    <ul v-for="data in datasGit">
      <ol> {{ data.id }} </ol>
      <ol> {{ data.count }} </ol>
      <ol> {{ data.lang }} </ol>
      <ol> {{ data.data }} </ol>
      <br/>
    </ul>

  </div>
</template>