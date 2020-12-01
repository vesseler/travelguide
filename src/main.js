// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'csss/var.styl'

//js
//按钮点击的默认的延迟取消
import FastClick from 'fastclick'
FastClick.attach(document.body);

//css
import './assets/css/reset.css'
import './assets/css/iconfont.css'

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//

//axios
import axios from 'axios'
Vue.prototype.$http = axios

//viewUI star
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(ViewUI);

//ViewUI end

//vuex
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //vuex必须更router一样挂载到这里，证明全局可用
  store,
  components: { App },
  template: '<App/>'
})
