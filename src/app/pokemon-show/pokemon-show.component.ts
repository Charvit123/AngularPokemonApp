import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonModel } from '.././model/pokemon.model';
import { PokemonService } from '.././services/pokemon.service';

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.css'],
})
export class PokemonShowComponent implements OnInit {
  pokemonForm: FormGroup;
  allPokemon: PokemonModel[];
  pokemonsOnThisPage: PokemonModel[];
  isLoaded: boolean;
  errMsg: string;
  pokemon: PokemonModel = new PokemonModel();
  validUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  page = 1;
  pageSize = 8;
  collectionSize: number = 0;

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.pokemonForm = fb.group({});
    this.allPokemon = [];
    this.pokemonsOnThisPage = [];
    this.isLoaded = false;
    this.errMsg = '';
  }

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[A-Za-z]\d*$/)]],

      type: ['', [Validators.required]],

      imgUrl: ['', [Validators.required, Validators.pattern(this.validUrl)]],
    });
    this.pokemonService.getPokemon().subscribe({
      next: (response) => {
        for (let pokemon of response) {
          this.allPokemon.unshift(pokemon);
        }
        this.collectionSize = this.allPokemon.length;
        this.refreshPokemons();
      },
      error: (err) => {
        this.errMsg = err.message;
      },
    });
  }
  public get Name(): FormControl {
    return this.pokemonForm.get('name') as FormControl;
  }

  public get Types(): FormControl {
    return this.pokemonForm.get('type') as FormControl;
  }

  public get ImageUrl(): FormControl {
    return this.pokemonForm.get('imgUrl') as FormControl;
  }

  clearForm() {
    this.Name.setValue('');
    this.Types.setValue('');
    this.ImageUrl.setValue('');
  }

  setIsloaded() {
    this.isLoaded = !this.isLoaded;
  }
  setCloseErr() {
    this.errMsg = '';
  }
  addPokemon() {
    let pokemon: PokemonModel = {
      name: this.Name.value,
      type: this.Types.value,
      imgUrl: this.ImageUrl.value,
    };

    this.pokemonService.addPokemon(pokemon).subscribe({
      next: (response) => {
        this.allPokemon.unshift(response);
        this.clearForm();
      },
      error: (err) => {
        this.errMsg = err.message;
      },
    });
  }

  refreshPokemons() {
    this.pokemonsOnThisPage = this.allPokemon.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}
