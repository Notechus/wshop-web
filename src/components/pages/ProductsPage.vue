<template>
    <div id="products-page" class="row">
        <product-thumbnail title="Apple iPhone SE" details="asdf"></product-thumbnail>
        <product-thumbnail title="xxxxdsa" details="asdf"></product-thumbnail>
        <product-thumbnail title="a" details="asdf"></product-thumbnail>
    </div>
</template>

<script>
    import ProductThumbnail from './../products/ProductThumbnail.vue';

    export default {
        components: {
            ProductThumbnail
        },
        created: function () {

        }
    }
</script>