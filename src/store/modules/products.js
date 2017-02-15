import * as types from '../mutation-types'

// initial state
const state = {
  products: []
}

// getters
const getters = {
  getProducts: state => {
    return state.products
  }
}

// actions
const actions = {
  [types.GET_PRODUCTS] ({ commit, state, rootState }) {
    // 这里应该是获取后端数据
    var products = [
      {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2},
      {'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10},
      {'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5}
    ]
    // 购物车中已添加的
    var shopCartProducts = rootState.shopCart.added
    commit(types.GET_PRODUCTS, { products, shopCartProducts })
  }
}

// mutations
const mutations = {
  [types.GET_PRODUCTS] (state, { products, shopCartProducts }) {
    // 要在这里绑定属性，否则不会添加getter、setter方法，该属性的双向数据绑定会失效
    for (let i = products.length - 1; i >= 0; i--) {
      products[i].isAdded = false
    }
    // 判断获取的商品是否添加在了购物车中
    for (let i = shopCartProducts.length - 1; i >= 0; i--) {
      for (let j = products.length - 1; j >= 0; j--) {
        if (shopCartProducts[i].id === products[j].id) {
          products[j].isAdded = true
        }
      }
    }
    state.products = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
