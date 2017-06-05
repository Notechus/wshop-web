<template>
    <div id="cart-page">
        <keep-alive>
            <transition name="fade" mode="out-in">
                <component :is="cartView"></component>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import CartSummary from './../cart/CartSummary.vue';
    import CartFinalize from './../cart/CartFinalize.vue';

    export default {
        components: {
            CartSummary,
            CartFinalize
        },
        created: function () {

        },
        data: function () {
            return {cartView: 'CartSummary'};
        }
    }
</script>

<style>

</style>