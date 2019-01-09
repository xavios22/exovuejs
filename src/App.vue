<template>
  <div id="app">
    <premiere/>
    <deuxieme/>
    <troisieme/>
    <quatre/>
  </div>
</template>

<script>
import premiere from './components/premiere.vue'
import deuxieme from'./components/deuxieme.vue'
import troisieme from './components/troisime.vue'
import quatre from './components/quatre.vue'
export default {
  name: 'app',
  components: {
    premiere,
    deuxieme,
    troisieme,
    quatre
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
