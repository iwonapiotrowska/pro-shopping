import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.loadData()
  },
  computed: {
    ...mapGetters('product', ['product', 'totalPrice'])
  },
  methods: {
    ...mapActions('product', ['getProduct']),
    loadData () {
      const id = this.$route.params.id
      this.getProduct(id)
    }
  },
  watch: {
    $route () {
      this.loadData()
    }
  }
}
