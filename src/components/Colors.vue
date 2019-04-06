<template lang="pug">
  .colors
    .colors__radio(v-for="(color, index) in product.colors" :key="color")
      input.colors__input(
        :id="color"
        :value="color"
        type="radio"
        v-model="product.color"
      )
      label.colors__label(:for="color" :style="displayColor(color)") {{color}}
</template>

<script>
import { ProductDetail } from '../mixins/ProductDetail'

export default {
  mixins: [ProductDetail],
  methods: {
    displayColor (color) {
      return `color: ${color}`
    }
  }
}
</script>

<style lang="sass" scoped>
.colors__radio
  margin: 5px 10px

.colors__label
  padding-left: 5px
  text-transform: uppercase
  letter-spacing: 1px
  font-size: 19px
  font-weithg: 400
  text-shadow: 1px 0 $c-text, -1px 0 $c-text, 1px 0 $c-text, -1px 1px 0 $c-text
  cursor: pointer

.colors__input
  transform: scale(1.5)
  cursor: pointer
</style>
