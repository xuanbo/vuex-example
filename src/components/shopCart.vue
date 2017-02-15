<template>
  <div>
    <h1 class="text-center">购物车</h1>
    <div class="text-center">
      <div v-for="product in products">
        {{ product.title }} --- {{ product.price }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    products: 'getAdded'
  })
}
</script>
