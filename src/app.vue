<template>
    <div class="container-fluid">
        <app-header></app-header>
        <content></content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
    import {store} from './stores/store.js';
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        replace: false,
        components: {
            AppHeader,
//            Content,
            AppFooter
        },
        computed: mapGetters({})
    }
</script>
