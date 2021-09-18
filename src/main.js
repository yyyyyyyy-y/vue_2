import Vue from 'vue';
import App from './App.vue';

// 引入路由
import router from './router';

// 引入element-ui
import ElementUI from 'element-ui';// 引入依赖
import 'element-ui/lib/theme-chalk/index.css';// 样式文件需要单独引入
Vue.use(ElementUI);// 使用声明

// 引入全局样式
import '@/styles/index.scss'

Vue.config.productionTip = false;

new Vue({
    router,// 路由挂载
    'render': h => h(App)
}).$mount('#app');
