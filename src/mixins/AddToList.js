import { mapState } from 'vuex'

export const AddToList = {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      list (state, getters) {
        return getters[`list/${this.listType}List`]
      }
    }),
    isOnTheList () {
      return !!this.list.find(item => this.product.id === item.id)
    }
  },
  methods: {
    addToList (listType, product) {
      this.$store.dispatch('list/addItem', [listType, product])
    }
  }
}
