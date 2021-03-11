// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
// // @ts-ignore
// import he from 'vuetify/es5/locale/he';
// // @ts-ignore
// import ar from 'vuetify/es5/locale/ar';
// import en from 'vuetify/es5/locale/en';
// Vue.use(Vuetify);

// export default new Vuetify({
//     lang:{
//         locales:{he,ar,en},
//         current:'en'
//     }
// });

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
//import VueI18n from 'vue-i18n'

//import he from 'vuetify/es5/locale/he';

Vue.use(Vuetify)
// Vue.use(VueI18n)

// const messages = {
//   en: {
//       roomquery:{
//           label:'Please insert room code'
//       },
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Items per page:',
//         pageText: '{0}-{1} of {2}',
//       },
//     },
//   },
//   he: {
//    ...he,
//    roomquery:{
//     label:'נא להכניס מספר חדר'
// },

//   },
// }

// // Create VueI18n instance with options
// const i18n = new VueI18n({
//   locale: 'en', // set locale
//   messages, // set locale messages
// })



export default new Vuetify({
  rtl:true
  // lang: {
  //   t: (key, ...params) => i18n.t(key, params),
  // },
})
