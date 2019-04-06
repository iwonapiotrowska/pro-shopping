<template lang="pug">
  .product.container
    .product__col
      .product__row
        img(:src="product.img" :alt="product.name")
    .product__col
      .product__row
        h2 {{ product.name }}
      .product__row.product__code
        | {{ product.id }}
      .product__row.product__price
        | ${{ totalPrice }}
      .product__row
        | Color:
        span.product__detail &nbsp;{{ product.color }}
      .product__row
        Colors(:product="product")
      .product__row
        | Size:
        span.product__detail &nbsp;{{ product.size }}
      .product__row
        Sizes(:product="product")
      .product__row
        Quantity(:product="product")
      .product__row
        AddToCart(:product="product")
      .product__row
        AddToFavorite(:product="product")
</template>

<script>
import Product from '../mixins/Product'
import AddToCart from '../components/AddToCart'
import AddToFavorite from '../components/AddToFavorite'
import Quantity from '../components/Quantity'
import Sizes from '../components/Sizes'
import Colors from '../components/Colors'

export default {
  components: {
    AddToCart,
    AddToFavorite,
    Quantity,
    Sizes,
    Colors
  },
  mixins: [Product]
}
</script>

<style lang="sass" scoped>
  .product
    display: flex
    flex-direction: column

    @include tablet-landscape-up
      flex-direction: row

  .product__col
    flex: 1

  .product__row
    margin: 20px 10px
    display: flex
    justify-content: center

    @include tablet-landscape-up
      justify-content: left

  .product__code
    color: $c-caption
    text-transform: uppercase

  .product__price
    font-weight: 700

  .product__detail
    font-weight: 700
    text-transform: capitalize
</style>
