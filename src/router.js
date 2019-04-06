import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import Favorites from './views/Favorites.vue'
import Contact from './views/Contact.vue'
import PageNotFound from './views/PageNotFound.vue'
import Product from './views/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Products' }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/page-not-found',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '*',
      redirect: { name: 'PageNotFound' }
    }
  ]
})
