<template>
  <div id="app">

    <Usercomponent />
  </div>
</template>

<script>
import Usercomponent from './components/Usercomponent.vue'

export default {
  name: 'app',
  components: {
    Usercomponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
