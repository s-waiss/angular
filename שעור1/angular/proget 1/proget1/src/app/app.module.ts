import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './folder/game/game.component';
import { BooksComponent } from './folder/books/books.component';
import { AtrakzyotComponent } from './folder/atrakzyot/atrakzyot.component';
import { MaslolimComponent } from './folder/maslolim/maslolim.component';
import { NamesComponent } from './folder/names/names.component';
import { DrinksComponent } from './folder/drinks/drinks.component';
import { WorkComponent } from './folder/work/work.component';
import { MapsComponent } from './folder/maps/maps.component';
import { TripsComponent } from './folder/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BooksComponent,
    AtrakzyotComponent,
    MaslolimComponent,
    NamesComponent,
    DrinksComponent,
    WorkComponent,
    MapsComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
