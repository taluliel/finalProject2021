import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueCoreVideoPlayer from 'vue-core-video-player'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import {firestorePlugin} from 'vuefire'

import VueGtag from "vue-gtag";

import App from './App.vue'
import vuetify from './plugins/vuetify';
import Room from './components/Room';
import QuestionViewer from './components/QuestionViewer'
import MovieViewer from './components/MovieViewer';
import home from './components/home';
import map from  './components/map';
import secondFloor from  './components/secondFloor';
import Phoenicians from  './components/Phoenicians';
import ship from  './components/ship';
import Crafts from  './components/Crafts';
import religion from  './components/religion';
import israeliHome from  './components/israeliHome';
import Entrance from  './components/Entrance';
import ThematicDisplays from  './components/ThematicDisplays';
import FlagIcon from 'vue-flag-icon';
import i18n from './i18n'

Vue.use(FlagIcon);

Vue.config.productionTip = false
Vue.use(VueRouter)
//Vue.use(VueCoreVideoPlayer)

Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'hechtmuseum-2021',
  databaseURL: 'https://hechtmuseum-2021.firebaseio.com',
  storageBucket: "hechtmuseum-2021.appspot.com"
})
export const db = firebase.firestore();
export const storage = firebase.storage();


const routes = [
    {path:'/',name:'home',component:home},
    {path:'/home',name:'home1',component:home},
  {path:'/room/:id',name:'room',component:Room},
{path:'/feature/:id',name:'feature',component:QuestionViewer},
{path:'/movie/:id',name:'movie',component:MovieViewer,props:(route)=>({
question:{},...route.params
})},
{path:'/map',name:'map',component:map},
{path:'/secondFloor',name:'secondFloor',component:secondFloor},
{path:'/Phoenicians',name:'Phoenicians',component:Phoenicians},
{path:'/ship',name:'ship',component:ship},
{path:'/Crafts',name:'Crafts',component:Crafts},
{path:'/religion',name:'religion',component:religion},
{path:'/israeliHome',name:'israeliHome',component:israeliHome},
{path:'/Entrance',name:'Entrance',component:Entrance},
{path:'/ThematicDisplays',name:'ThematicDisplays',component:ThematicDisplays},
];
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history',
})

Vue.use(VueGtag, {
  config: { id: "G-TL7KC7BPET" }
}, router);


new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
