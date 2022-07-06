import {Component, OnInit} from '@angular/core';
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

  constructor(private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getDataListPokemons()
      .then(response => {
        console.log(response.results);
        this.pokemons = response.results;
    })
  }

}
