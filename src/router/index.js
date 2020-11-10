import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
          import(/*webpackChunkName: "about"*/ "../views/About")  
  }, 
  {
    path: '/product',
    name: 'Product',
    component: () =>
          import(/*webpackChunkName: "product"*/ '../views/ProductDisplay.vue') 
  }, 
  {
    path: '/gallery',
    name: 'Gallery',
    component: () =>
          import(/*webpackChunkName: "gallery"*/ '../views/Gallery.vue') 
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
