<template>
  <div id="mainComponent">
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
  </div>
</template>

<script>
  import content from '../data/resumeContent'

  export default {
    name: 'mainContent',
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
