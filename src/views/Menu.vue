<template>
    <Navbar/>
    <div class="centrar-cards-menu-2col md:h-142 2xl:h-210 4k:h-254">
    <Card
        v-for="(modulo, index) in modulos"
        :key="index"
        :titulo="modulo.titulo"
        :imagen="modulo.imagen"
        :ruta="modulo.ruta"
        >
        </Card>
    </div>
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
        titulo: "Registro de información de Telepeaje",
        imagen: "almacenamiento-de-base-de-datos.png",
        ruta: "/RegistroInformacionTelepeaje",
        },
        {
        titulo: "Gestion de usuarios",
        imagen: "gestion-de-base-de-datos.png",
        ruta: "/Gestion_Usuarios",
        },
        {
        titulo: "Mantenimiento de Tag's",
        imagen: "verificacion-del-servidor.png",
        ruta: "/MantenimientoTags",
        },
        {
        titulo: "Generacion de Reportes",
        imagen: "informe-de-base-de-datos.png",
        ruta: "/GeneracionReportes",
        }
    ];

        return {modulos}
    }
}
</script>

<style lang="scss" scoped>

</style>