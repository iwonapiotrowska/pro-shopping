import Vue from 'vue'
import Vuex from 'vuex'
import list from './list'
import product from './product'
import products from './products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list,
    product,
    products
  }
})
