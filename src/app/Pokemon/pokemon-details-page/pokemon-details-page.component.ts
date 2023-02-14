import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../../model/pokemon.model';
import { PokemonService } from './../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.css'],
})
export class PokemonDetailsPageComponent implements OnInit {
  @Input() pokemon: PokemonModel;
  errMsg: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private navigate: Location
  ) {
    this.pokemon = {};
    this.errMsg = '';
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemonById(id).subscribe({
      next: (response: PokemonModel) => {
        this.pokemon = {
          name: response.name,
          powerId : response.powerId,
          imageUrl: response.imageUrl,
        };
      },
      error: (err) => {
        this.errMsg = err.message;
      },
    });
  }
  goBack() {
    this.navigate.back();
  }
}
