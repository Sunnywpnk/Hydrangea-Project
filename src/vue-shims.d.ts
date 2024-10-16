// src/vue-shims.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

  declare module 'bootstrap-vue-3' {
    const BootstrapVue3: any;
    export { BootstrapVue3 };
  }
  
  