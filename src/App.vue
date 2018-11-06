<template>
  <div id="app">
    <mainComponent></mainComponent>
    <skillComponent></skillComponent>
    <educationComponent></educationComponent>
    <projectsComponent></projectsComponent>
  </div>
</template>

<script>
import mainComponent from './components/mainComponent'
import skillComponent from './components/skillComponent'
import educationComponent from './components/educationComponent'
import projectsComponent from './components/projectsComponent'

export default {
  name: 'app',
  components: {
    mainComponent,
    skillComponent,
    educationComponent,
    projectsComponent
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
