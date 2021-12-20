<template>
    <router-link :to="ruta"> 
        <button class="cardmenu flex flex-col items-center animacion">
            <img :src="require('@/assets/' + imagen)" class="object-scale-down h-22 w-full md:h-28 2xl:h-60 4k:h-76">
            <h1 class="text-center text-white font-semibold">{{ titulo }}</h1>
        </button>
    </router-link>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['titulo', 'imagen', 'ruta'])
</script>

<style scoped>

</style> 