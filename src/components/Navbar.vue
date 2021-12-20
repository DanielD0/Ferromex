<template>
<div class="sticky inset-x-0 top-0 z-10">
    <nav class="inline-flex justify-between bg-gray-800 p-3 w-full ">
    <div class="text-lg">
    <router-link to="/Menu" class="inline-block  text-white text-base lg:text-2xl 4k:text-3xl">
        <img src="@/assets/logoferromex.png" height="30" width="30" class="inline rounded-full" />
        Inicio          
        </router-link>     
    </div>
    <div class="inline-block  text-white text-base lg:text-xl 2xl:text-2xl 4k:text-3xl">  
        <p class="text-white ">Bienvenido</p>                
    </div>  
    <div class="inline-block  text-white text-base lg:text-xl 2xl:text-2xl 4k:text-3xl">  
        <router-link to="/">
        <p class="text-white ">Salir</p>
        </router-link>                
    </div>     
    </nav>
</div>

</template>

<script setup>

</script>

<style scoped>

</style>