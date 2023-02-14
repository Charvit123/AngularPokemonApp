import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonDetailsComponent } from './Pokemon/pokemon-details-card/pokemon-details.component';
import { PokemonShowComponent } from './Pokemon/pokemon-show/pokemon-show.component';
import { PokemonDetailsPageComponent } from './Pokemon/pokemon-details-page/pokemon-details-page.component';
import { AddPokemonButtonComponent } from './Pokemon/add-pokemon-button/add-pokemon-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    PokemonDetailsComponent,
    PokemonShowComponent,
    PokemonDetailsPageComponent,
    AddPokemonButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
