// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './js/router.js'
import store from './js/vuex.js'
import tool from './js/tool.js'
import animated from 'animate.css'
import $ from 'jquery'
import ScratchCard from 'vue-scratch-card0'

Vue.config.productionTip = false;
Vue.use(animated);
Vue.use(ScratchCard);
window.all={};
all.store=store;
all.router=router;
all.tool=tool;
all.$=$;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
if(!all.tool.getLocal("list"))all.tool.setLocal("list",all.store.state.list);
if(!all.tool.getLocal("elseList"))all.tool.setLocal("elseList",all.store.state.list);
if(!all.tool.getLocal("threeTime"))all.tool.setLocal("threeTime",1);
if(!all.tool.getLocal("secondTime"))all.tool.setLocal("secondTime",1);
if(!all.tool.getLocal("oneTime"))all.tool.setLocal("oneTime",1);
