import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
        state: {
            username: 'Notechus',
            currentView: 'NewsPage'
        },
        getters: {
            currentView: state => state.currentView,
            username: state => state.username
        },
        mutations: {
            changeView(state, view){
                state.currentView = view;
            }
        }
    })
;
