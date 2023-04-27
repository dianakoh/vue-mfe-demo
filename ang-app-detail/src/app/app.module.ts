import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, MovieDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const movieDetailElement = createCustomElement(MovieDetailComponent, { injector });
    customElements.define('movie-detail-component', movieDetailElement);
  }
}
