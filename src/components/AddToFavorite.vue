<template lang="pug">
  button.button(@click="addToList('favorite', product)")
    span(v-if="!isOnTheList") Add to favorite
    span(v-else) Remove from favorite
</template>

<script>
import { AddToList } from '../mixins/AddToList'

export default {
  mixins: [AddToList],
  data () {
    return {
      listType: 'favorite'
    }
  }
}
</script>
