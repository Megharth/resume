<template>
  <div class="frame">
    <div class="container">
      <div class="heading">Education</div>
      <div class="row years" v-for="year in years">
        <div class="col-sm-2">
          <img :src="year.imgUrl" class="icon mx-auto d-block">
        </div>
        <div class="col-sm-10">
          <div class="sub-heading">{{year.name}}</div>
          <div class="education">{{year.education}}</div>
          <div class="institution">{{year.institute}}</div>
          <div class="score">Score: {{year.score}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import content from "../data/educationContent"
  export default {
    name: "educationComponent",
    data() {
      return content
    }
  }
</script>

<style lang="sass" scoped>
  @import "../sass/educationComponent"
</style>