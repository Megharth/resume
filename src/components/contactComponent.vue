<template>
  <div id="contact">
    <div class="left-side">
      <div class="heading">
        Contact Me
      </div>
    </div>
    <div class="right-side">
      <div class="email-block">
        <div class="heading">I love to talk. Feel free to drop a mail</div>
        <a class="email btn" href="mailto: m.c.lakhataria@gmail.com">Send Email</a>
      </div>
      <div class="social-block">
        <div class="heading">
          Connect with me
        </div>
        <div class="social">
          <a v-for="handle in content.socialHandles" :href="handle.link">
            <img :src="handle.imgUrl" :alt="handle.name" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import content from '../data/resumeContent'

    export default {
        name: "contactsComponent",
        data() {
            return {
                content
            }
        }

    }
</script>

<style scoped lang="sass">

@import '../sass/variables'

#contact
  position: absolute
  height: 100%
  width: 100%
  overflow: hidden !important
  color: white

.left-side, .right-side
  height: 100%
  width: 50%


.left-side
  float: left
  background: #2c2c54
  -webkit-clip-path: polygon(0 0, 100% 0, 0 100%)
  clip-path: polygon(0 0, 100% 0, 0 100%)
  .heading
    font-size: 72px
    font-family: $Staatliches
    margin-left: 10%
    margin-top: 30%
    animation: track-in 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both

@keyframes track-in
  0%
    letter-spacing: -0.5em
    transform: translateZ(-700px) translateY(-500px)
    opacity: 0

  40%
    opacity: 0.6
  100%
    transform: translateZ(0) translateY(0)
    opacity: 1


.right-side
  float: right
  text-align: center
  .heading
    font-size: 45px
    font-family: $Staatliches
  .email-block
    margin-top: 20%
    max-width: 450px
    .email
      background: $accentColor
      width: initial
      color: White
      margin-top: 10px
      cursor: pointer
      animation: slit-in 0.45s ease-out both
  .social-block
    margin-top: 20%
    max-width: 450px
    .social
      margin-top: 10px
      a
        margin: 10px
        display: inline-block
        animation: slide-in 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
        &:nth-child(2)
          animation-delay: 0.5s
        &:nth-child(3)
          animation-delay: 1s
        &:nth-child(4)
          animation-delay: 1.5s
        &:nth-child(5)
          animation-delay: 2s
        img
          height: 70px
          width: 70px
          transition: all 0.2s ease
          &:hover
            transform: scale(1.3)

@keyframes slit-in
  0%
    transform: translateZ(-800px) rotateX(90deg)
    opacity: 0

  54%
    transform: translateZ(-160px) rotateX(87deg)
    opacity: 1

  100%
    transform: translateZ(0) rotateX(0)

@keyframes slide-in
  0%
    transform: translateX(-800px) rotateY(30deg) scale(0)
    transform-origin: -100% 50%
    opacity: 0

  100%
    transform: translateX(0) rotateY(0) scale(1)
    transform-origin: 1800px 50%
    opacity: 1

@media (min-width: 320px) and (max-width: 640px)
  .left-side
    .heading
      font-size: 32px
      margin-top: 25px
      writing-mode: vertical-rl
      text-orientation: upright

  .right-side
    .email-block
      margin-top: 120%
      margin-right: 20%
      .heading
        font-size: 18px
    .social-block
      margin-right: 20%
      margin-top: 35%
      .heading
        font-size: 18px
      a
        img
          margin: 10px
          height: 30px !important
          width: 30px !important
</style>