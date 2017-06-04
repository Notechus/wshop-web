<template>
    <div id="products-page" class="row">
        <product-thumbnail></product-thumbnail>
        <product-thumbnail></product-thumbnail>
        <product-thumbnail></product-thumbnail>
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