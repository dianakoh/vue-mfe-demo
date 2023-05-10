import { enableProdMode, Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare global {
  interface Window {
    movieId: number;
  }
}

if (environment.production) {
  enableProdMode();
}

window.movieId = 758323;
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
