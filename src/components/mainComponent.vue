<template>
  <div class="mainComponent">
    <div class="img">
      <img class="image img-fluid" src="../assets/Megharth.png" alt="Megharth">
    </div>
    <div class="text">
      <div>Hello I'm <span class="name">Megharth Lakhataria</span></div>
      <div class="occupation">{{ content.occupation }}</div>
    </div>
    <div class="social">
      <a v-for="handle in content.socialHandles" :href="handle.link">
        <img :src="handle.imgUrl" :alt="handle.name" class="img-fluid">
      </a>
    </div>
    <!--<div class="frame">
      <div class="row">
        <div class="col-sm-4">
          <img class="image img-responsive" src="../assets/Megharth.png" alt="Megharth">
        </div>
        <div class="col-sm-8">
          <resumeContent/>
        </div>
      </div>
    </div>
    <div class="right-side"></div>-->
  </div>
</template>

<script>
  import resumeContent from './resumeContent'
  import content from '../data/resumeContent'

  export default {
    name: 'mainContent',
    components : {
      resumeContent
    },
    data() {
      return {
        content
      }
    }
  }
</script>

<style lang="sass" scoped>
@import "../sass/variables"
@import "../sass/mainComponent"



</style>
