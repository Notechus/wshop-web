import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
        state: {
            users: [],
            messages: [],
            username: 'Notechus',
        },
        getters: {
            users: state => state.users,
            messages: state => state.messages,
        },
        mutations: {
            addUser(state, user)
            {
                state.users.push(user);
            },
            addMessage(state, message)
            {
                state.messages.push(message);
            }
        }
    })
;
