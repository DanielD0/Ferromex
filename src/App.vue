<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/Menu">Menu</router-link> |
    <router-link to="/Gestion_Usuarios">Gestion de Usuarios</router-link>|
    <router-link to="/GeneracionReportes">Generacion Reportes</router-link>|
    <router-link to="/MantenimientoTags">MantenimientoTags</router-link>|
    <router-link to="/RegistroInformacionTelepeaje">RegistroInformacionTelepeaje</router-link>
  </div>
  <router-view/>
</template>
<script>
export default{
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
