<template>
    <router-link :to="ruta"> 
        <button class="card flex flex-col content-center items-center animacion">
            <img :src="require('@/assets/' + imagen)">
            <h1 class="text-center py-5 font-titulo font-bold">{{ titulo }}</h1>
        </button>
    </router-link>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps(['titulo', 'imagen', 'ruta'])
</script>

<style scoped>

</style> 