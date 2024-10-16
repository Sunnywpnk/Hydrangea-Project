import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';


library.add(faSearch, faEye, faEyeSlash);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)  // Register FontAwesomeIcon component
  .use(router,BootstrapVue3)
  .mount('#app');
