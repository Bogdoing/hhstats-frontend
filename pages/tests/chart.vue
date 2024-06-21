<script lang="ts" setup>
import { ref } from 'vue'
import { languages } from '~/types/Langs'

const langs = ref(languages)
const gitData = await useGetGitData('2024-02-04')
</script>

<template>
    <div class="">

        <div class="m-4">
            <b class='text-4xl'>Статистика языков программирования <i>2024</i> </b>
            <hr/>
            <!-- <br/> -->
        </div>

        <section class='m-4'>
            <p>
            <!-- - Golang удерживает лидерство по релевантности поиска работы. -->
            </p>
        </section>

        <div class="m-4">
            <b class='text-2xl'>Статистика репозиториев GitHub </b>
            <hr/>
        </div>
        
        <ChartJsonBar color="#2dd4bf"/>

        <section class='m-4'>
            <p>
                На основе предоставленных данных о количестве репозиториев на GitHub по различным языкам программирования можно сделать следующие наблюдения:
                <br/><br/>
                <p>
                    1. JavaScript и Java являются самыми популярными языками программирования с наибольшим количеством репозиториев.
                    <br/>
                    2. Python также пользуется высокой популярностью с значительным количеством репозиториев. 
                    <br/>
                    3. TypeScript, PHP, Ruby, C++, и C# также имеют заметное количество репозиториев на GitHub.
                    <br/>
                    4. Kotlin, Swift, Dart, Rust, Vue и Go имеют меньшее количество репозиториев по сравнению с более популярными языками, но все равно представлены на платформе. 
                    <br/>
                </p>
                <br/>
            </p>
            <hr>
        </section>

        <div class="m-4">
            <b class='text-2xl'>Статистика из HH.ru по языкам </b>
            <hr/>
        </div>

        <MultiLineSelect />

        <div class="m-4">
            <b class='text-2xl'>Отношение вакансий на 1C к остальным языкам. </b>
            <hr/>
        </div>
        <ChartPie mod="0"/>
        
        <div class="m-4">
            <b class='text-2xl'>Статистика Front-end фреймворков. </b>
            <hr/>
        </div>
        <ChartPie mod="1"/>

        
        <div class="m-4">
            <b class='text-2xl'>Прогнозы HH.ru по всем имеющимся языкам программирования </b>
            <hr/>
        </div>
        <ChartAllPredict/>

        <!-- <ChartJsonMultiLine :lang="langs"  region="113"/> -->

    </div>
</template>