<template>
  <div id="app">
    <component is="mainComponent"></component>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent.vue'

export default {
  name: 'app',
  components: {
    mainComponent
  }
}
</script>

<style lang="sass">
@import  url('https://fonts.googleapis.com/css?family=Exo+2')
body
  background-color: #3A6EA5
  font-family: 'Exo 2', sans-serif
</style>
