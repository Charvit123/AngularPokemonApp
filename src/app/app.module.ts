import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './pokemon-details-card/pokemon-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonShowComponent } from './pokemon-show/pokemon-show.component';
import { PokemonDetailsPageComponent } from './pokemon-details-page/pokemon-details-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPokemonButtonComponent } from './add-pokemon-button/add-pokemon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonDetailsComponent,
    HomePageComponent,
    PokemonShowComponent,
    PokemonDetailsPageComponent,
    AddPokemonButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
