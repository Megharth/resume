<template>
  <div class="frame">
    <div class="heading">
      <span>
        <span class="highlight">Skills</span> and <span class="highlight">Technologies</span> worked with
      </span>
    </div>
    <div class="icons">
      <div class="row">
        <div  v-for="skill in skills" class="col-sm-3">
          <a :href="skill.link">
            <img :src="skill.imgUrl" :alt="skill.name">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import content from "../data/skillComponent"
  export default {
    name: 'skillComponent',
    data() {
      return content
    }
  }
</script>

<style lang="sass" scoped>
@import "../sass/skillComponent"
</style>