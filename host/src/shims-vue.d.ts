/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'commonComponents/*';
declare module 'appList/*';
declare module 'reactAppDetail/*';
declare module 'angularAppAbout/*';
