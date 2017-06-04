<template>
    <div>
        <div id="products-page" class="row">
            <category-list></category-list>
            <product-list></product-list>
        </div>
        <div id="filter-list" class="row">
            <filter-list></filter-list>
        </div>
    </div>
</template>

<script>
    import CategoryList from './../products/CategoryList.vue';
    import ProductList from './../products/ProductList.vue';
    import FilterList from './../products/FilterList.vue';

    export default {
        components: {
            CategoryList,
            ProductList,
            FilterList
        },
        created: function () {

        }
    }
</script>