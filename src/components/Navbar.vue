<template>
<div class="sticky inset-x-0 top-0 z-10">
    <nav class="flex justify-between bg-gray-800 p-3">
    <!--BOTON INICIO-->
    <div class="text-lg">
    <router-link to="/home" class="inline-block pl-5 pt-1 text-white text-xl">
        <img src="../assets/logo.png" height="30" width="30" class="inline" />
        Inicio          
        </router-link>     
    </div>   
    <!--PANEL NOMBRE DE USUARIO-->   
    <div class="inline-block pl-5 pt-1 text-white text-xl">  
        <p class="text-white ">Bienvenido</p>                
    </div>  
    <div class="inline-block pl-5 pt-1 text-white text-xl">  
        <p class="text-white ">Salir</p>                
    </div>     
    </nav>

</div>

</template>

<script setup>

</script>

<style scoped>

</style>