<template lang="pug">
  .sizes
    .sizes__radio(v-for="size in product.sizes" :key="size")
      label.sizes__label(:for="size") {{size}}
      input.sizes__input(
        :id="size"
        :value="size"
        type="radio"
        v-model="product.size"
      )
</template>

<script>
import { ProductDetail } from '../mixins/ProductDetail'

export default {
  mixins: [ProductDetail]
}
</script>

<style lang="sass" scoped>
  .sizes
    display: flex

  .sizes__radio
    display: flex
    flex-direction: column
    justify-content: center
    margin: 5px
    padding: 5px
    cursor: pointer

  .sizes__label
    cursor: pointer
    padding-bottom: 5px

  .sizes__input
    cursor: pointer
    transform: scale(1.5)
</style>
