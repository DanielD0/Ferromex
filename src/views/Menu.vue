<template>
    <Navbar/>
    <Card
        v-for="(modulo, index) in modulos"
        :key="index"
        :titulo="modulo.titulo"
        :imagen="modulo.imagen"
        :ruta="modulo.ruta"
        >
        </Card>
    <Footer/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Card from '../components/CardMenu.vue'
export default {
    components: {Navbar,Footer,Card},
    setup () {
        const modulos = [
        {
        titulo: "Monitoreo de Servicios en Tiempo Real",
        imagen: "logo.png",
        ruta: "/",
        },
        {
        titulo: "Monitoreo de Carriles",
        imagen: "logo.png",
        ruta: "/",
        },
        {
        titulo: "Transacciones de Telepeaje en Tiempo Real",
        imagen: "logo.png",
        ruta: "/",
        },
        {
        titulo: "Envío de Transacciones al Operador de Telepeaje",
        imagen: "logo.png",
        ruta: "/",
        },
        {
        titulo: "Búsqueda de Transacciones",
        imagen: "logo.png",
        ruta: "/",
        },
    ];

        return {modulos}
    }
}
</script>

<style lang="scss" scoped>

</style>