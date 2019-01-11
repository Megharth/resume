<template>
    <div id="navbar">
        <ul class="bar">
            <li><a href="#" @click="$emit('changepage', 0)">Home</a></li>
            <li><a href="#" @click="$emit('changepage', 1)">Skills</a></li>
            <li><a href="#" @click="$emit('changepage', 2)">Education</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            open: false
        }
    }
}
</script>

<style lang="sass" scoped>
@import ../sass/navbarComponent

</style>
