import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.css'],
})
export class PokemonShowComponent implements OnInit {
  allPokemon: PokemonModel[];
  pokemonsOnThisPage: PokemonModel[];
  isLoaded: boolean;
  errMsg: string;

  validUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  page = 1;
  pageSize = 8;
  collectionSize: number = 0;

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.allPokemon = [];
    this.pokemonsOnThisPage = [];
    this.isLoaded = false;
    this.errMsg = '';
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe({
      next: (response) => {
        for (let pokemon of response) {
          this.allPokemon.unshift(pokemon);
        }
        this.refreshPokemons();
      },
      error: (err) => {
        this.setErrorMessage(err.message);
      },
    });
  }

  setIsloaded() {
    this.isLoaded = !this.isLoaded;
  }
  setErrorMessage(message: string) {
    this.errMsg = message;
  }

  refreshPokemons() {
    console.log("Function Called");
    // this.allPokemon.unshift({
    //   name: "ABC",
    //   type: "ABC",
    //   imageUrl: "ABC",
    // });
    this.collectionSize = this.allPokemon.length;
    console.log(this.allPokemon);
    console.log(this.page, this.pageSize);

    this.pokemonsOnThisPage = this.allPokemon.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );

  }
}
