import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPokemonButtonComponent } from '../add-pokemon-button/add-pokemon-button.component';
import { NgbPaginationModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    NgModule,
    AddPokemonButtonComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule
  ]
})
export class PokemonShowModule { }
