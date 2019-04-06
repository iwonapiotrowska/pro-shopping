import mockedData from '../mocks/mockedData.json'

const state = {
  products: []
}

// getters
const getters = {
  products: state => state.products
}

// actions
const actions = {
  getProductsList ({ commit }) {
    commit('getProductsList')
  }
}

// mutations
const mutations = {
  getProductsList (state) {
    state.products = mockedData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
