<template>
  <div id="app">
    <mainComponent></mainComponent>
    <skillComponent></skillComponent>
    <educationComponent></educationComponent>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent'
import skillComponent from './components/skillComponent'
import educationComponent from './components/educationComponent'

export default {
  name: 'app',
  components: {
    mainComponent,
    skillComponent,
    educationComponent
  }
}
</script>

<style lang="sass">
@import  url('https://fonts.googleapis.com/css?family=Exo+2')
@import './sass/variables'
body
  background-color: $primaryColor
  font-family: 'Exo 2', sans-serif

::-webkit-scrollbar
  display: none
</style>
