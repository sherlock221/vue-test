import Vue from 'vue'
import App from './App'
import Hello from './components/Hello';
import VueRouter from  "vue-router";

//开启debug模式
Vue.config.debug = true;
//使用路由
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/app', component: App },
    {path: '*', redirect: '/app'}
  ]
});




const app  = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

