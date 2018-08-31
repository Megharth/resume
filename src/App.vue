<template>
  <div id="app">
    <component is="skillComponent"></component>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent'
import skillComponent from './components/skillComponent'

export default {
  name: 'app',
  components: {
    mainComponent,
    skillComponent
  }
}
</script>

<style lang="sass">
@import  url('https://fonts.googleapis.com/css?family=Exo+2')
body
  background-color: #3A6EA5
  font-family: 'Exo 2', sans-serif
</style>
