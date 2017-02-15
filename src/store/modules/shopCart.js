import * as types from '../mutation-types'

// initial state
const state = {
  added: []
}

// getters
const getters = {
  getAdded: state => {
    return state.added
  }
}

// actions
const actions = {
  [types.ADD_TO_SHOP_CART] ({ commit, rootState }, product) {
    commit(types.ADD_TO_SHOP_CART, { product })
  }
}

// mutations
const mutations = {
  [types.ADD_TO_SHOP_CART] (state, { product }) {
    // 修改产品的是否添加到购物车标识
    product.isAdded = true
    var added = state.added
    var isAdded = false
    for (let i = added.length - 1; i >= 0; i--) {
      if (added[i].id === product.id) {
        isAdded = true
        break
      }
    }
    if (isAdded) {
      alert('已经添加过该商品')
    } else {
      added.push(product)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
