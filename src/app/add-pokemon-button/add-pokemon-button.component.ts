import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonModel } from '.././model/pokemon.model';
import { PokemonService } from '.././services/pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonFormModel } from '../model/pokemonForm.model';

@Component({
  selector: 'app-add-pokemon-button',
  templateUrl: './add-pokemon-button.component.html',
  styleUrls: ['./add-pokemon-button.component.css'],
})
export class AddPokemonButtonComponent implements OnInit {
  @Input() allPokemon: PokemonModel[] = [];
  @Input() refreshPokemons: Function = () => {};
  @Input() setErrorMessage: Function = () => {};
  page = 1;
  pageSize = 8;
  pokemonForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private modalService: NgbModal
  ) {
    this.pokemonForm = fb.group({});
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/[A-Za-z]\d*$/)]],

      powerId: ['', [Validators.required]],
    });
  }

  public get name(): FormControl {
    return this.pokemonForm.get('name') as FormControl;
  }

  public get powerId(): FormControl {
    return this.pokemonForm.get('powerId') as FormControl;
  }

  clearForm() {
    this.name.reset();
    this.powerId.reset();
  }
  addPokemon() {
    const pokemon: PokemonFormModel = {
      name: this.name.value,
      powerId: this.powerId.value,
    };

    this.pokemonService.addPokemon(pokemon).subscribe({
      next: (response) => {
        this.allPokemon.unshift(response);
        this.refreshPokemons();
        this.clearForm();
      },
      error: (err) => {
        this.setErrorMessage(err.message);
      },
    });
  }

  saveChanges(modal: any) {
    modal.close('Save click');
    this.addPokemon();
  }

  closeModal(modal: any) {
    modal.close('Save click');
    this.clearForm();
  }
}

