import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import routeComponents from '../routeComponents';
import appComponents from '../components/index';
import Page from '../components/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ...appComponents,
    ...Object.values(routeComponents),
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    RouterModule.forRoot([
      {
        path: 'audiobooks',
        component: routeComponents.AudioBooks,
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
