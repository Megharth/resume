<template>
  <div class="container">
    <div class="heading">I'm <span id="name">{{name}}</span></div>
    <div class="sub-heading">{{occupation}}</div>
    <div class="bio">
      <span v-for="lines in bio">{{lines}}</span>
    </div>
    <div class="social">
      <div class="sub-heading">Ping me on following</div>
      <div class="icon">
        <a v-for="handle in socialHandles" :href="handle.link">
          <img :src="handle.imgUrl" :alt="handle.name" class="img-fluid">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import content from '../data/resumeContent'

  export default {
    name: 'resumeContent',
    data() {
      return content
    }
  }
</script>

<style lang="sass" scoped>
@import "../sass/resumeComponent"
@import "../sass/mainComponent"
</style>