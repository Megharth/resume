<template>
  <div class="mainComponent">
    <div class="left-side"></div>
    <div class="frame">
      <div class="row">
        <div class="col-sm-4">
          <img class="image img-responsive" src="../assets/Megharth.png" alt="Megharth">
        </div>
        <div class="col-sm-8">
          <resumeContent/>
        </div>
      </div>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
  import resumeContent from './resumeContent'
  export default {
    name: 'mainContent',
    components : {
      resumeContent
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="sass" scoped>
@import "../sass/variables"
@import "../sass/mainComponent"



</style>
