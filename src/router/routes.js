// 引用模板
import index from '../components/index'
import notFound from '../components/notFound'

import products from '../components/products'
import shopCart from '../components/shopCart'

// 配置路由
export default [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    component: index
  }, {
    path: '/products',
    component: products
  }, {
    path: '/shopCart',
    component: shopCart
  }, {
    path: '*',
    component: notFound
  }
]
