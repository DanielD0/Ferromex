<template>
<div class="w-screen h-full flex justify-center">
    <CardLogin
            title ="Usuario:"
            title2 = "Contraseña:"
            color = "red"
    />
    </div>
<Footer 
    titulocentro = "BOSQUE DE CIRUELOS NO 99,COL. BOSQUES DE LAS LOMAS, MËXICO, D.F.,C.P. 11700"
    tituloderecha = "V 2.0.5"
    tituloizquierda = ""
    color = "red"
/> 
</template>

<script>
import CardLogin from '../components/CardLogin.vue';
import Footer from '../components/FooterLogin.vue';


export default {
    components:{
        CardLogin,Footer
    },
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>