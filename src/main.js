/**
 * Created by huangfeng on 2016/9/23.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './router';
var filter =require("./filter/index");
Vue.filter('reverse', filter.reverse);
import '../css/style.css'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: configRouter
});

var sidebar =require("./components/sidebar.vue");
var topHeader =require("./components/main-header.vue");

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
//var util = require("../components/util.js");
var main_sidebar = new Vue({
    el: '#main-sidebar',
    components:{sidebar}
});
var main_header = new Vue({
    el: '#main-header',
    components:{topHeader}
});


new Vue({
    router
}).$mount('#app')


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        /*$.ajax({
            url: "/login/checkLogin",
            dataType: "json",
            success: function (xhr) {
                if(xhr.status==200){
                    next()
                }else{
                    next({ name: 'login', query: {url:to.path}})
                }
            }
        })*/
        next()
    }else{
        next()
    }
})

