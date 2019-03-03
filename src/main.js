
/** VueJS */
import Vue from 'vue'
import VueRouter from 'vue-router'

/** Stylesheet */
import './assets/style/style.scss'

/** Components */
import navbar from './components/navbar.vue'


/** OTHERS */
import Faker from './js/Faker'
import Panier from './js/Panier'
import Kernel from './js/Kernel'

Vue.use(VueRouter)

console.log('Codé par Keny Zachelin : ', 'http://kenyzachelin.fr')

/** STORE */

let products = Faker.getProducts(5)

let panier = new Panier()

const router = new VueRouter({

  mode: 'hash',

  routes: [
    {
      name: 'root',
      path: '/',
      component: resolve => require(['./components/home.vue'], resolve).default
    },
    {
      name: 'allproducts',
      path: '/lesproduits',
      component: resolve => require(['./components/allproducts.vue'], resolve).default
    },
    {
      name: 'allproductsFiltered',
      path: '/lesproduits/:category',
      component: resolve => require(['./components/allproducts.vue'], resolve).default
    },
    {
      name: 'single-product',
      path: '/produit/:category-:productId',
      component: resolve => require(['./components/single-product.vue'], resolve).default,
    },
    {
      name: 'cart',
      path: '/votrepanier',
      component: resolve => require(['./components/cart.vue'], resolve).default
    },
    {
      name: '404',
      path: '/404notfound',
      component: resolve => require(['./components/404.vue'], resolve).default
    },
    {
      path: '/foo',
      redirect: '/'
    }

  ]

})

let vm = new Vue({
  el: '#app',
  components: {navbar},
  router,

  data(){
    return {
      products,
      panier
    }
  }
})
