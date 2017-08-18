import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule }   from '@angular/router'

import { SwiperModule } from 'angular2-useful-swiper'

import { AppComponent } from './app.component'
import { Page } from '../components/page/page.component'
import { Book } from '../components/book/book.component'
import { AudioBooks } from '../routeComponents/audioBooks/audioBooks.component'

@NgModule({
  declarations: [
    AppComponent,
    Page,
    Book,
    AudioBooks,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    RouterModule.forRoot([
      {
        path: 'audiobooks',
        component: AudioBooks,
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
