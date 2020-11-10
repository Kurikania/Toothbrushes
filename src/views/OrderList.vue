<template>
<div class="order-container">
    <h3>Your order</h3> 
      <ul>
        <li v-for="(order, index) in orders" :key="index">
          A color {{ order.colorPick }} toothbrush for {{ order.name }} 
          <br/>
          {{ order.qty }} pcs
          <br/>
          <hr>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: "OrderList",
    props: ['orders']
}
</script>
<style scoped src="../assets/productDisplay.css">

</style>