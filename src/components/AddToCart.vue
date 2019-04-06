<template lang="pug">
  button.button(@click="addToList(listType, product)")
    | Add to cart
</template>

<script>
import { AddToList } from '../mixins/AddToList'

export default {
  mixins: [AddToList],
  data () {
    return {
      listType: 'cart'
    }
  }
}
</script>
