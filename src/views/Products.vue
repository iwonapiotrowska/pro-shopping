<template lang="pug">
  .list.container
    Box(:products="products")
</template>

<script>
import Products from '../mixins/Products'
import Box from '../components/Box'

export default {
  name: 'Products',
  components: {
    Box
  },
  mixins: [Products]
}
</script>

<style lang="sass" scoped>
.products__text
  padding: 27px 20px 35px
  color: $c-text

.products__heading
  margin: 0 0 9px

.products__paragraph
  font-size: 14px
  margin: 0
  line-height: 1.45
</style>
