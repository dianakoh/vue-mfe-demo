import { createApp } from 'vue';
import App from './App.vue';

export const mount = () => {
  const id = 'app-list';
  const rootContainer =
    document.getElementById(id) || document.body.appendChild(Object.assign(document.createElement('div'), { id }));

  const app = createApp(App);
  app.mount(rootContainer);

  return app;
};
