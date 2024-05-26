<script lang="ts" setup>
import { ref } from 'vue'
import { languages } from '~/types/Langs'

const langs = ref(languages)
const gitData = await useGetGitData('2024-02-04')
</script>

<template>
<div class="">
        <div class="flex flex-wrap">
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="React" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="Vue" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="Angular" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="java" region="113"/>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="php" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="ruby or Ruby on Rails" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="node.js or Javascript backend or Javascript Fullstack or JS Fullstack or JS backend or TS backend" region="113"/>
                </div>
            </div>
            <div class="w-full sm:w-1/4">
                <div class="p-1 mb-4">
                    <ChartJsonLine lang="java" region="113"/>
                </div>
            </div>
        </div>
    </div>
</template>