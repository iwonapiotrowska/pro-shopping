<template lang="pug">
  nav.nav
    .container
      router-link.nav__item(
        v-for="item in items"
        :key="item.name"
        :to="{ name: item.path }"
      )
        | {{ item.name }}
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      items: [{
        name: 'Products',
        path: 'Products'
      },
      {
        name: 'Cart',
        path: 'Cart'
      },
      {
        name: 'Favorites',
        path: 'Favorites'
      },
      {
        name: 'Contact',
        path: 'Contact'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.nav
  background-color: $c-white
  padding-bottom: 12px
  border-bottom: 1px solid $c-border
  text-align: center

  @include tablet-portrait-up
    text-align: left

.nav__item
  padding-bottom: 12px
  text-transform: uppercase
  text-decoration: none
  font-size: 14px
  color: $c-text
  margin: 0 7px

  @include tablet-portrait-up
    margin: 0 55px 0 0

.router-link-active
  color: $c-main-orange
  border-bottom: 2px solid $c-main-orange
</style>
