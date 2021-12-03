<template>
    <button class="bg-blue-200" @click="showModalTramoEditar = !showModalTramoEditar">Prueba de boton</button>
    <Modal :show="showModalTramoEditar">
    </Modal>
    <!-- <CardLogin
        img="../assets/logo.png"
        imgAlt="Vue Logo"
        title="Usuario:"
        title2="Contraseña:"
        color="red"
        />  -->
        <!-- <Card
          v-for="(modulo, index) in modulos"
          :key="index"
          :titulo="modulo.titulo"
          :imagen="modulo.imagen"
          :ruta="modulo.ruta"
          >
        </Card> -->
        
    <Footer 
      titulocentro = "© 2021 Proyectos y Sistemas Informaticos."
        tituloderecha = "V 2.0.5"
        tituloizquierda = ""
        color = "red"
    />
</template>

<script>
import Modal from '../components/Modal.vue';
import Footer from '../components/FooterLogin.vue';
import CardLogin from '../components/CardLogin.vue';
import Card from '../components/CardMenu.vue'
import {ref} from 'vue';
export default {
  components: {Modal,Footer,CardLogin,Card},
  setup () {
    const showModalTramoEditar = ref(false);
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
    return {showModalTramoEditar,modulos}
  }
}
</script>

<style lang="scss" scoped>

</style>