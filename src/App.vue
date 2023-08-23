<template>
  <NavbarItem/>
  <router-view/>
</template>

<script>
import NavbarItem from './components/NavbarItem.vue'


export default {
  name: 'App',
  components: {
    NavbarItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
