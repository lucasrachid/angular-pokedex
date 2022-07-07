import {Component, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Constants} from "../utils/constants";
import {PokemonModel} from "../models/pokemon.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatMenuTrigger} from "@angular/material/menu";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  pokemons: PokemonModel[] = [];
  @Output() pokeId: number = 1;
  @ViewChild('menuTrigger') menuTrigger = MatMenuTrigger;


  constructor(private pokemonService: PokemonService,
              private dialog: MatDialog,
              // @Inject(MAT_DIALOG_DATA) public data: DialogComponent
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
    this.getPokemonTypeList(this.pokeId!);
  }

  getPokemonList() {
    this.pokemonService.getDataListPokemons()
      .then(response => {
        console.log(response.results);
        if(this.pokemons.length <= 0) {
          this.pokemons = response.results;
        } else {
          this.pokemons = this.pokemons.concat(response.results);
        }
    })
  }

  getPokemonTypeList(pokeId: number) {
    this.pokemonService.getPokemonType(pokeId)
      .then(response => {
        console.log(response);
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.menuTrigger);
  }
}
