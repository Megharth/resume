<template>
  <div id="app">
    <div class="menu" @click="open = !open">
      <div><img src="./assets/menu.png" alt="menu" class="img-fluid"></div>
    </div>
    <transition name="open">
      <navbarComponent v-if="open" @changepage="changePage($event)"></navbarComponent>
    </transition>
    <mainComponent v-if="pageNo === 0"></mainComponent>
    <skillComponent v-if="pageNo === 1"></skillComponent>
    <div class="navigator">
      <div class="prev-btn" v-if="pageNo>0">
        <img src="./assets/larrow.png" class="img-fluid" alt="prev" @click="pageNo = pageNo - 1">
      </div>
      <div class="next-btn" v-if="pageNo< pages-1">
        <img src="./assets/rarrow.png" class="img-fluid" alt="next" @click="pageNo = pageNo + 1">
      </div>
    </div>
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
      open: false,
      pages: 2,
      pageNo: 0
    }
  },
  methods: {
    changePage($event) {
      this.pageNo = $event
      this.open = false
    }
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

.navigator
  color: white
  position: absolute
  top: 50%
  width: 100%
  .next-btn, .prev-btn
    img
      height: 36px
      width: 36px
      cursor: pointer
      padding: 5px
      border-radius: 50%
      transition: all 0.2s linear
      border: 2px solid #fff
      &:hover
        transform: scale(1.1)
  .next-btn
    margin-right: 2%
    float: right
    animation: slide-left 1s ease-out

  .prev-btn
    margin-left: 2%
    float: left
    animation: slide-right 1s ease-out

@keyframes slide-left
  0%
    transform: translateX(1000px)
    opacity: 0
  100%
    transform: translateX(0)
    opacity: 1

@keyframes slide-right
  0%
    transform: translateX(-1000px)
    opacity: 0
  100%
    transform: translateX(0)
    opacity: 1
</style>
