<template>
  <div class="frame">
    <div class="row">
      <div class="col-sm-4">Image</div>
      <div class="col-sm-8">
        <resumeContent></resumeContent>
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

<style lang="sass" scoped>
.frame
  margin: 8% auto
  height: 600px
  max-width: 1400px
  box-shadow: 0 0 10px 4px #555
  background: #EBEBEB

</style>
