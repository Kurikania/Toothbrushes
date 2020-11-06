import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Gallery from '../components/Gallery.vue' 
import Product from '../components/ProductDisplay.vue' 
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About  
  }, 
  {
    path: '/product',
    name: 'Product',
    component: Product
  }, 
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
