<template>
  <div id="educationComponent">
    <div class="heading">
      <span class="text">Education</span>
    </div>
    <div class="timeline">

    </div>
    <div class="checkpoints">
      <div class="checkpoint"  v-for="year in years">
        <div class="timeline-indicator"></div>
        <div class="name">{{year.name}}</div>
        <div class="education">{{year.education}}</div>
        <div class="institute">{{year.institute}}</div>
        <div class="score">{{year.score}}</div>
      </div>
    </div>
    <!--<div class="container">
      <div class="heading">Education</div>
      <div class="education-container">
        <div class="row years" v-for="year in years">
          <div class="col-sm-2"></div>
          <div class="col-sm-2">
            <img :src="year.imgUrl" class="icon mx-auto d-block">
          </div>
          <div class="col-sm-6">
            <div class="sub-heading">{{year.name}}</div>
            <div class="education">{{year.education}}</div>
            <div class="institution">{{year.institute}}</div>
            <div class="score">Score: {{year.score}}</div>
          </div>
        </div>
      </div>
    </div>-->
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