import Vue from 'vue'
import App from './App.vue'
import router from "./routes/index";
// import * as firebase from 'firebase'
// var firebase = require('firebase/app');
import { firebase } from '@firebase/app'
import store from './store'

Vue.config.productionTip = false
//set your firebase configuration options
const configOptions = {
  apiKey: "",
  authDomain: "vue-firebase-auth-2802d.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-2802d.firebaseio.com",
  projectId: "vue-firebase-auth-2802d",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
