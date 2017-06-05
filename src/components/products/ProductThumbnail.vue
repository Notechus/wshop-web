<template>
    <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
            <img src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,apple-iphone-se-32gb-gold-356911,pr_2016_3_25_15_19_35_14.jpg"
                 alt="...">
            <div class="caption">
                <h3>{{title}}</h3>
                <p>{{details}}</p>
                <p>
                    <a href="#" class="btn btn-primary" @click="addToCart" role="button">Add to Cart</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from './../../stores/store.js';
    import {mapState, mapGetters, mapMutations} from 'vuex';

    export default {
        components: {},
        methods: mapMutations({
            addToCart: 'addToCart'
        }),
        created: function () {

        },
        data: function () {
            return {title: 'Apple iPhone SE', details: 'some details about product'};
        }
    }
</script>