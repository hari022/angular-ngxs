import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {PostState} from './post.state';

import {AppComponent} from './app.component';
import {Post} from './post';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PostState
    ]),
  ],
  providers: [ApiService, Post],
  bootstrap: [AppComponent]
})
export class AppModule {
}
