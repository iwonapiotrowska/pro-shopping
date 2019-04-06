<template lang="pug">
  header.header
    .container.header__container
      h1 Pro Shopping!
    NavBar
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'MainHeader',
  components: {
    NavBar
  }
}
</script>

<style lang="sass" scoped>
.header
  padding: 18px 0 0
  background-color: $c-white
  margin-top: -130px

  @include tablet-portrait-up
    padding: 38px 0 0
    margin-top: -161px

.header__container
  padding-bottom: 18px

  @include tablet-portrait-up
    padding-bottom: 28px
</style>
