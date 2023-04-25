import { createApp } from 'vue';
import MovieListContainer from './containers/MovieListContainer.vue';

export const mount = () => {
  const id = 'app-list';
  const rootContainer =
    document.getElementById(id) || document.body.appendChild(Object.assign(document.createElement('div'), { id }));

  const app = createApp(MovieListContainer);
  app.mount(rootContainer);

  return app;
};
