import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyDT6hMBgOTuoCi1PyHji36ZkJvj7NiDTO4",
    authDomain: "vue-calendar-f6199.firebaseapp.com",
    databaseURL: "https://vue-calendar-f6199.firebaseio.com",
    projectId: "vue-calendar-f6199",
    storageBucket: "vue-calendar-f6199.appspot.com",
    messagingSenderId: "5570968466",
    appId: "1:5570968466:web:7f62e63e00a4ef2f77df4b"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
