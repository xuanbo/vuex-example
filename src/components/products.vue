<template>
  <div>
    <h1 class="text-center">产品列表</h1>
    <div class="line"></div>
    <div class="text-center" v-for="product in products">
      <div>
        {{ product.title }} --- {{ product.price }}
        <button v-if="product.isAdded" class="btn btn-success">已添加</button>
        <button v-else class="btn btn-primary" @click="addToShopCart(product)">添加到购物车</button>
      </div>
    </div>
    {{ products }}
  </div>
</template>

<script>
import * as types from 'store/mutation-types'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  methods: {
    ...mapActions({
      addToShopCart: types.ADD_TO_SHOP_CART
    })
  },
  created () {
    this.$store.dispatch(types.GET_PRODUCTS)
  }
}
</script>
