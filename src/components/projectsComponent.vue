<template>
  <div class="projectsComponent">
    <div class="heading">Projects</div>
    <div class="projects container" align="center">
      <div class="project" v-for="repo in repos" ref="project">
        <div class="project-title"><a :href="repo.html_url">{{repo.name}}</a></div>
        <div class="language">{{repo.language}}</div>
        <div class="preview" v-if="repo.homepage"><a :href="repo.homepage"><img src="../assets/live.png" alt="preview"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
import  {TimelineMax} from "gsap"

export default {
  data() {
    return {
      repos: []
    }
  },
  updated() {
    const timeline = new TimelineMax()
    const {project} = this.$refs
    timeline.staggerFrom(project, 0.5, { opacity: 0, skewX: 180}, 0.1)
  },
  created() {
    this.$http.get("https://api.github.com/users/megharth/repos").then(function(response) {
      this.repos = response.body
    })
  }
}
</script>


<style lang="sass" scoped>
@import "../sass/projectsComponent"
</style>