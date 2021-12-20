<template>
<div class="wrapper my-38 -ml-20">
        <div class="card grid grid-cols-1 gap-4 ml-14">
            <div class="justify-self-center">
                    <img class="rounded w-20 h-25" src="../assets/logoferromex.png" >
            </div>
            <label class="block">
                <span class="">{{ title }}</span>
                <input  type="text" class="w-full" placeholder="Usuario" required/>
            </label>
            
            <label class="flex flex-col">
                <span class="">{{ title2 }}</span>
                <input class="w-full" placeholder="Contraseña" required/>
                <!-- <button @click="showPassword" class="absolute ml-68 mt-8" :class="{'hidden': !mostraricono, 'block':mostraricono }"> -->
                <!-- </button> -->
                <!-- <button @click="showPassword" class="absolute ml-68 mt-8" :class="{'hidden': mostraricono, 'block':!mostraricono }">
                </button> -->
            </label>
            <!-- <p v-if="error" class="text-red-500">Has introducido mal el Usuario o la contraseña.</p> -->
            <!-- <label class="block">
                <input type="checkbox" checked>
                <span class="text-sm">Recordarme</span>
            </label> -->
            <router-link to="/Menu" class="btn justify-self-center text-white" :class="{'btnlogincolorgray' :color === 'gray','btnlogincolorgreen' :color === 'green', 'ferromex-color' :color === 'red','btnlogincolorblue' :color === 'blue','btnlogincoloryellow' :color === 'yellow','btnlogincolorindigo' :color === 'indigo','btnlogincolorpurple' :color === 'purple','btnlogincolorpink' :color === 'pink' }" type="submit">
            Iniciar Sesion
            </router-link>
            <a href="#" class="text-sm text-gray-400">Olvidaste tu contraseña?</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['img', 'imgAlt', 'title', 'title2','color'],
    setup() {
        
    },
}
</script>