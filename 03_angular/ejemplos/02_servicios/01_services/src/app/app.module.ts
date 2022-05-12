import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesService } from './heroes.service';
import { HeroListComponent } from './heroes/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], //[HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
