import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
        state: {
            username: 'Notechus',
            quantity: 0,
            currentView: 'NewsPage'
        },
        getters: {
            currentView: state => state.currentView,
            username: state => state.username,
            quantity: state => state.quantity
        },
        mutations: {
            changeView(state, view){
                state.currentView = view;
            },
            addToCart(state){
                // add item to cart
                state.quantity += 1;
            }
        }
    })
;
