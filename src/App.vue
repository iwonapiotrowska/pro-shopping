<template lang="pug">
  div
    MainHeader
    transition(name="fade")
      router-view
    MainFooter
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="sass">
@import '@/assets/stylesheets/global.sass'

.fade-enter-active,
.fade-leave-active
  transition-property: opacity
  transition-duration: .20s

.fade-enter-active
  transition-delay: .20s

.fade-enter,
.fade-leave-active
  opacity: 0
</style>
