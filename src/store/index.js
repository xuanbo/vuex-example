import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import * as actions from './actions'
import * as getters from './getters'

import products from './modules/products'
import shopCart from './modules/shopCart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    products,
    shopCart
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
