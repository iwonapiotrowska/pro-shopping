import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.loadData()
  },
  computed: {
    ...mapGetters('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['getProductsList']),
    loadData () {
      this.getProductsList()
    }
  }
}
