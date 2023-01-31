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

@Component({
  selector: 'app-add-pokemon-button',
  templateUrl: './add-pokemon-button.component.html',
  styleUrls: ['./add-pokemon-button.component.css'],
})
export class AddPokemonButtonComponent implements OnInit {
  @Input() allPokemon: PokemonModel[] = [];
  @Input() refreshPokemons: Function = () => {};
  @Input() setErrorMessage: Function = () => {};
  pokemonForm: FormGroup;

  validUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

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

      type: ['', [Validators.required]],

      imgUrl: ['', [Validators.required, Validators.pattern(this.validUrl)]],
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
    this.Name.reset();
    this.Types.reset();
    this.ImageUrl.reset();
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

