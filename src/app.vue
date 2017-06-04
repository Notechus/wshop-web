<template>
    <div class="container">
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
    import AppContent from './components/AppContent.vue';
    import {store} from './stores/store.js';
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        replace: false,
        components: {
            AppHeader,
            AppContent,
            AppFooter
        },
        computed: mapGetters({})
    }
</script>
