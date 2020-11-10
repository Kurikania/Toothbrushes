<template>
    <form class="order-form" @submit.prevent="onSubmit">
      <h3>Order Now!</h3>
      <label for="name">Enter your name:</label>
      <input id="name" v-model="name"> 
      <label for="colorPick">Pick a Color</label>
      <select id="colorPick" v-model.number="colorPick">
        <option 
          v-for="(variant) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
        > {{ variant.color }}
        </option>
      </select>
      <label for="qty">How many?</label>
      <input id="qty" v-model="qty" type="number">  
      <input  class="button" type="submit" value="Submit">  
  
    </form>
</template>
<script>
export default {
  props: ['variants', 'selectedVariant'], 
  name: "OrderForm",
  data() {
    return {
      name: '',
      colorPick: null,
      qty: null

    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.colorPick === null || this.qty === null) {
        alert('Order is incomplete. Please fill out every field.')
        return
      }        

      let productOrder = {
        name: this.name,
        colorPick: this.colorPick,
        qty: this.qty 

      }
      this.$emit('order-submitted', productOrder)  
      this.name = ''
      this.colorPick = null
      this.qty = null   
    }, 
  }
}
</script>

<style scoped src="../assets/productDisplay.css">

</style>