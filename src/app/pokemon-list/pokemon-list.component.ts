import {Component, OnInit, Output} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Constants} from "../utils/constants";
import {PokemonModel} from "../models/pokemon.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{
  pokemons: PokemonModel[] = [];
  @Output() pokeId: number = 1;
  constructor(private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemonList();
    this.getPokemonTypeList(this.pokeId!);
  }

  getPokemonList() {
    this.pokemonService.getDataListPokemons()
      .then(response => {
        console.log(response.results);
        this.pokemons = response.results;
    })
  }

  getPokemonTypeList(pokeId: number) {
    this.pokemonService.getPokemonType(pokeId)
      .then(response => {
        console.log(response);
      })
  }

}
