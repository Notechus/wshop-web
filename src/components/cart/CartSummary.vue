<template>
    <div class="cart-items">
        <cart-items></cart-items>
        <div class="pull-right">
            <button id="checkout-btn" class="btn btn-success">Checkout</button>
        </div>
    </div>
</template>

<script>
    import CartItems from './CartItems.vue';

    export default {
        components: {
            CartItems
        }
    }
</script>

<style>
    #checkout-btn {
        right: 0;
        margin-right: 15px;
        margin-bottom: 10px;
    }
</style>