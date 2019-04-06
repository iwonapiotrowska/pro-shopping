<template lang="pug">
  div
    .list(v-if="list.length")
      Box(:products="list" :listType="listType")
    h2.list__empty(v-else) The list is empty
</template>

<script>
import { List } from '../mixins/List'

export default {
  mixins: [List]
}
</script>

<style lang="sass" scoped>
  .list__item
    width: 300px
    margin-bottom: 20px
    text-decoration: none

  .list__item-detail
    margin-top: 7px
    text-transform: capitalize

  .list__empty
    text-align: center
</style>
