<template>
    <div id="content" class="">
        <keep-alive>
            <transition name="fade" mode="out-in">
                <component :is="currentView"></component>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
    import NewsPage from "./pages/NewsPage.vue";
    import ProductsPage from "./pages/ProductsPage.vue";
    import ContactPage from "./pages/ContactPage.vue";
    import CartPage from './pages/CartPage.vue';
    import {store} from './../stores/store.js';
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        components: {
            NewsPage,
            ProductsPage,
            ContactPage,
            CartPage
        },
        computed: mapGetters({
            currentView: 'currentView'
        }),
        created: function () {

        }
    }
</script>

<style>
    #content {
        /*width: 100%;*/
        /*height: 100%;*/
        padding: 15px;
    }
</style>