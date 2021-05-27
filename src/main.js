import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 elementUI 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
