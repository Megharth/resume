<template>
  <div id="projectsComponent">
    <div class="heading"><h1>Projects</h1></div>
    <div class="projects">
      <div v-for="repo in repos.slice(0,6)" class="project">
        <a :href="repo.html_url">{{repo.name}}</a>
      </div>
    </div>
    <div class="background">
      <div class="bg-project" v-for="repo in repos.slice(6)">
        {{repo.name}}
      </div>
    </div>
    <div class="info">See all my projects on <a href="https://github.com/Megharth">Github</a>.</div>
   <!-- <div class="projects container" align="center">
      <div class="project" v-for="repo in repos" ref="project">
        <div class="project-title"><a :href="repo.html_url">{{repo.name}}</a></div>
        <div class="language">{{repo.language}}</div>
        <div class="preview" v-if="repo.homepage"><a :href="repo.homepage"><img src="../assets/live.png" alt="preview"></a></div>
      </div>
    </div>-->
  </div>
</template>

<script>

export default {
  data() {
    return {
      repos: []
    }
  },
  updated() {

    //----------------------------------------------------
    //RANDOM ARRANGEMENTS OF PROJECT TITLES IN BACKGROUND
    //----------------------------------------------------


    let bgProjects = document.querySelectorAll('.bg-project')
    let zone = 200/bgProjects.length
    for(let i=0; i<Math.floor(bgProjects.length/2); i++) {
      bgProjects[i].style.top = (Math.random()*20+ 10) + "%"
      bgProjects[i].style.left = (Math.random()*((i+1)*zone - i*zone - 5)+ i*zone) + "%"
    }
    for(let i=Math.floor(bgProjects.length/2); i<bgProjects.length; i++) {
      bgProjects[i].style.bottom = (Math.random()*30+ 15) + "%"
      bgProjects[i].style.left = (Math.random()*(((i+1)-(bgProjects.length/2))*zone - (i-(bgProjects.length/2))*zone - 5)+ (i-(bgProjects.length/2))*zone) + "%"
    }
  },
  created() {
    this.$http.get("https://api.github.com/users/megharth/repos", {
      params: {
        sort: 'pushed'
      }
    }).then(function(response) {
        this.repos = response.body
    })
  }
}
</script>


<style lang="sass" scoped>
@import "../sass/projectsComponent"
</style>