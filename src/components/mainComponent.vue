<template>
  <div class="frame">
    <div class="row">
      <div class="col-sm-4">Image</div>
      <div class="col-sm-8">
        <resumeContent/>
      </div>
    </div>
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
        msg : 'hello world'
      }
    }
  }
</script>

<style lang="sass">
@import "../sass/mainComponent"
.frame
  .row
    margin-left: 0
    margin-right: 0


</style>
