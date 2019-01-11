<template>
  <div id="app">
    <div class="menu" @click="open = !open">
      <div><img src="./assets/menu.png" alt="menu" class="img-fluid"></div>
    </div>
    <transition name="open">
      <navbarComponent v-if="open"></navbarComponent>
    </transition>
    <!--<mainComponent></mainComponent>-->
    <skillComponent></skillComponent>
  </div>
</template>

<script>
import navbarComponent from './components/navbarComponent'
import mainComponent from './components/mainComponent'
import skillComponent from './components/skillComponent'
import educationComponent from './components/educationComponent'
import projectsComponent from './components/projectsComponent'

export default {
  name: 'app',
  components: {
    navbarComponent,
    mainComponent,
    skillComponent,
    educationComponent,
    projectsComponent
  },
  data() {
    return {
      open: false
    }
  },
  methods: {}
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

.menu
  color: white
  width: 50px
  text-align: center
  position: absolute
  z-index: 101
  top: 5%
  right: 5%
  img
    padding: 10px
    &:hover
      cursor: pointer


.open-enter-active
  animation: open 0.6s linear forwards

.open-leave-active
  animation: open 0.6s linear reverse

@keyframes open
  0%
    transform: translate(100%, -80%) scale(0)
    opacity: 0
    border-radius: 50%

  70%
    border-radius: 50%
  100%
    transform: translate(0, 0) scale(1)
    opacity: 1
    border-radius: 0
</style>
