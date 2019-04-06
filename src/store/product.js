import mockedData from '../mocks/mockedData.json'

const state = {
  product: {
    name: '',
    id: '',
    price: null,
    quantity: null,
    img: '',
    size: '',
    sizes: [],
    color: '',
    colors: []
  }
}

// getters
const getters = {
  product: state => state.product,
  totalPrice: state => state.product.quantity * state.product.price
}

// actions
const actions = {
  getProduct ({ commit }, id) {
    commit('getProduct', id)
  }
}

// mutations
const mutations = {
  getProduct (state, id) {
    const product = mockedData.find(product => product.id === id)

    state.product = {
      name: product.name,
      id: product.id,
      price: product.price,
      quantity: 1,
      img: product.img,
      size: product.sizes[0],
      sizes: product.sizes,
      color: product.colors[0],
      colors: product.colors
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
