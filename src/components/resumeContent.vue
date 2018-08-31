<template>
  <div class="container">
    <div class="heading">I'm <span id="name">{{name}}</span></div>
    <div class="sub-heading">{{occupation}}</div>
    <div class="bio">
      <span v-for="lines in bio">{{lines}}</span>
    </div>
    <div class="social">
      <a v-for="handle in socialHandles" :href="handle.link" class="icon">
        <img :src="handle.imgUrl" :alt="handle.name">
      </a>
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
@import url('https://fonts.googleapis.com/css?family=Oswald|Titillium+Web')

.heading
  padding-top: 20px
  font-family: 'Oswald', sans-serif
  letter-spacing: 2px
  font-size: 45px
  text-transform: uppercase

#name
  color: #FF6700
  font-size: 48px
  font-weight: bold

.sub-heading
  font-family: 'Titillium Web', sans-serif
  font-size: 35px

.bio
  max-width: 600px
  text-align: justify

.social
  margin-top: 30px

  .icon
    img
      box-shadow: 5px 0 5px #b0b0b0
      max-height: 75px
      border-radius: 50%
      max-width: 75px

</style>