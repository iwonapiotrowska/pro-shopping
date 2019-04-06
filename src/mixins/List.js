import { mapState } from 'vuex'
import Box from '../components/Box'

export const List = {
  components: {
    Box
  },
  props: {
    listType: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      list (state, getters) {
        return getters[`list/${this.listType}List`]
      }
    })
  }
}
