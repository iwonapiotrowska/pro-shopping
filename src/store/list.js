const state = {
  cartList: [],
  favoriteList: []
}

// getters
const getters = {
  cartList: state => state.cartList,
  favoriteList: state => state.favoriteList
}

// actions
const actions = {
  addItem ({ commit }, [listType, product]) {
    commit('addItem', [listType, product])
  }
}

// mutations
const mutations = {
  addItem (state, [listType, product]) {
    const list = state[`${listType}List`]
    const index = list.indexOf(list.find(item => product.id === item.id))

    switch (listType) {
      case 'cart':
        if (index === -1) {
          state.cartList.push({ ...product })
        } else {
          state.cartList[index].quantity =
            state.cartList[index].quantity + Number(product.quantity)
        }
        break
      case 'favorite':
        if (index === -1) {
          state.favoriteList.push({ ...product })
        } else {
          state.favoriteList.splice(index, 1)
        }
        break
      default:
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
