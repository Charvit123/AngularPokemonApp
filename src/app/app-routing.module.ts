import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonDetailsPageComponent } from './Pokemon/pokemon-details-page/pokemon-details-page.component';
import { PokemonShowComponent } from './Pokemon/pokemon-show/pokemon-show.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'pokemon', component: PokemonShowComponent },
  { path: 'pokemon/:id', component: PokemonDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
