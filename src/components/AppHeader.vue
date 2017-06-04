<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <a class="navbar-brand" href="#">WShop</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li><a href="#" @click="changeView('NewsPage')">News</a></li>
                        <li><a href="#" @click="changeView('ProductsPage')">Products</a></li>
                        <li><a href="#" @click="changeView('ContactPage')">Contact</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click="changeView('CartPage')">Cart ({{quantity}})</a></li>
                        <li><p class="navbar-text text-cursive">{{username}}</p></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {store} from './../stores/store.js';
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        components: {},
        methods: mapMutations({
            changeView: 'changeView'
        }),
        computed: mapGetters({
            username: 'username',
            quantity: 'quantity'
        }),
        created: function () {

        }
    }
</script>

<style>
    .text-cursive {
        font-style: italic;
    }
</style>
