<template>

<div class="product-display">
  <main> 
    <div class="product-container">
      <div class="product-image">
        <img :src="imageToothbrush">
        <div id="brushName" v-if= "orders.length>0"> {{ orders[orders.length-1].name }} </div>
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
        <div class = "color-box"> 
            <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
            </div>
        </div>
            <OrderForm :variants="variants" @order-submitted="addOrder" />
            <button v-if="orders.length" class="btn" @click="openModal">Go to Cart</button>
            <div class = "trg" v-show ="modalOpen"> </div>
            <div class = "modal"  v-show = "modalOpen">            
                <div class="container">
                  <OrderList v-if="orders.length" :orders="orders" />                 
                </div>
                <button class="btn" @click.prevent="close" >Back to Shopping</button>
            </div>
    </div>         
    
    </div>  
  </main>
  </div>
</template>
<script>
import OrderList from "./OrderList";
import OrderForm from './OrderForm';
export default {
  name: "Product", 
  components: {
     OrderForm, OrderList 
  },
  data() {
    return {
        modalOpen: false, 
        product: 'Toothbrush',
        selectedVariant: 0,
        details: ['bamboo', 'nylon'],
        variants: [
          { id: 2234, color: 'green', image: "../img/bamboo-toothbrush-done-zoom-green.jpg", quantity: 50 },
          { id: 2235, color: 'blue', image: '../img/bamboo-toothbrush-done-zoom-blue.jpg', quantity: 0 },
          { id: 2236, color: 'yellow', image: '../img/bamboo-toothbrush-done-zoom.jpg', quantity: 100 },
          { id: 2237, color: 'red', image: '../img/bamboo-toothbrush-done-zoom-red.jpg', quantity: 100 },
        ],
        orders: []
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
      
      },
      close() {
        this.modalOpen= !this.modalOpen;
      },
      addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
        this.selectedVariant = index
      },
      addOrder(order) {
        this.orders.push(order)
      }
  },
  computed: {
      imageToothbrush() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      shipping() {
        if (Math.random()>0.5) {
          return 'Free'
        }
        return 1.99
      }
  }
}

</script>

<style scoped src="../assets/productDisplay.css">

</style>
