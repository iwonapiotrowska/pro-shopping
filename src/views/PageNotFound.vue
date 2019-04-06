<template lang="pug">
  .container.not-found
    h2 Page not found
    a.not-found__link(@click="$router.go(-1)") &lArr; go back
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="sass" scoped>
.not-found
  text-transform: uppercase
  color: $c-text

.not-found__link
  cursor: pointer
  color: $c-cta
</style>
