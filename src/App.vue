<template>
  <div id="app">
    <premiere/>
    <deuxieme/>
    <troisieme/>
  </div>
</template>

<script>
import premiere from './components/premiere.vue'
import deuxieme from'./components/deuxieme.vue'
import troisieme from './components/troisime.vue'
export default {
  name: 'app',
  components: {
    premiere,
    deuxieme,
    troisieme
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
