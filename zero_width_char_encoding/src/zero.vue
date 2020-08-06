<template>
  <div id="zero">
    <!-- <img src="./assets/logo.png"> -->
    <encoding msg="Make it invisible"/>
  </div>
</template>

<script>
import encoding from './components/encoding.vue'

export default {
  name: 'zero',
  components: {
    encoding
  }
}
</script>

<style>
#zero {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>