/**
 * Created by huangfeng on 2016/9/23.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './router';
import '../css/style.css'
var sidebar =require("./components/sidebar.vue");
var topHeader =require("./components/main-header.vue");
var VueValidator = require('vue-validator')
Vue.use(VueValidator)
//var util = require("../components/util.js");
var main_sidebar = new Vue({
    el: '#main-sidebar',
    components:{sidebar}
});
var main_header = new Vue({
    el: '#main-header',
    components:{topHeader}
});

Vue.use(VueRouter)
var filter =require("./filter/index");
Vue.filter('reverse', filter.reverse);
const router = new VueRouter();
configRouter(router)
var app = Vue.extend({})
router.start(app, '#app')

