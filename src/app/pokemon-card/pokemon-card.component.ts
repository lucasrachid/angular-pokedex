import {Component, Input} from '@angular/core';
import {Constants} from "../utils/constants";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  baseUrlPokemonStart: string = Constants.URL_IMG_BASE_START;
  baseUrlPokemonFinal: string = Constants.URL_IMG_BASE_FINAL;
  @Input() pokemon: string | undefined;
  @Input() pokeId: number | undefined;

  getImagePokemon() {
    const formattedNumber = this.leadingZero(this.pokeId!);
    return this.baseUrlPokemonStart + formattedNumber + this.baseUrlPokemonFinal;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
