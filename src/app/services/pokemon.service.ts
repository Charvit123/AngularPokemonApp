import { PokemonFormModel } from './../model/pokemonForm.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'http://localhost:3000/posts/';
  constructor(private http: HttpClient) {}
  getPokemon() {
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
  addPokemon(pokemon: PokemonFormModel) {
    return this.http.post<PokemonModel>(this.baseUrl, pokemon);
  }
  getPokemonById(id: number | string) {
    return this.http.get<PokemonModel>(this.baseUrl + id);
  }
}
