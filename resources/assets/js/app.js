
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import router from './routes'
window.Vue = require('vue');

import App from './components/Example.vue'
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App }
// });

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li v-on:click="say(\'hi\')">{{ todo.text }}</li>'
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})