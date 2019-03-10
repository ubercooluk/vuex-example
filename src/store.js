import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users:[]
    },
    getters:{
        totalUsers : state => {
            return state.users.length
        },
        maxId : state => {
           return Math.max(...state.users.map(o => o.id), 0) + 1;
        }
    },
    mutations: {
            ADD_USER:(state,name) =>{
                state.users.push(...name);
            },
            REMOVE_USER:(state,index) =>{
                state.users.splice(index,1);
            },
    },
    actions:{

    }
})