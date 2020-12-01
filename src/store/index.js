import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 默认是上海，刷新后显示的是localstrong的值
let defaultCity = "上海";
defaultCity = localStorage.city;


const state = {
    city:localStorage.city
}

const mutations = {
    changeCity(state,cityName) {
        state.city = cityName;
        //application里的localStrong里的key与value
        localStorage.city = cityName;
    }
}


export default new Vuex.Store({

    state,
    mutations

})