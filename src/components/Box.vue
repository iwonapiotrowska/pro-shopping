<template lang="pug">
.box
  router-link.wrapper.box__item(
    :to="{ name: 'product', params: { id: product.id }}"
    v-for="product in products"
    :key="product.id"
  )
    img.box__img(:src="product.img" :alt="product.name")
    .box__text
      h2.box__heading {{ product.name }}
      div(v-if="listType === 'cart'")
        | Quantity: {{ product.quantity }}
      div
        span(v-if="listType === 'cart'")
          | Total Price: ${{ Number(product.quantity) * product.price }}
        span(v-else) ${{ product.price }}
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    listType: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.box
  margin-top: 37px
  display: flex
  flex-wrap: wrap
  flex-direction: column
  align-items: center

  @include tablet-landscape-up
    flex-direction: row

.box__item
  margin: 10px
  text-decoration: none

.box__img
  max-height: 300px

.box__text
  padding: 27px 20px 35px
  color: $c-text

.box__heading
  margin: 0 0 9px
</style>
