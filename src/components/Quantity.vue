<template lang="pug">
  .quantity
    label.quantity__label Quantity
    input.quantity__input(min="1" type="number" v-model="product.quantity")
</template>

<script>
import { ProductDetail } from '../mixins/ProductDetail'

export default {
  mixins: [ProductDetail]
}
</script>

<style lang="sass" scoped>
  .quantity
    display: flex
    flex-direction: column

  .quantity__label
    margin-bottom: 5px

  .quantity__input
    width: 60px
    height: 30px
</style>
