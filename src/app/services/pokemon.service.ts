import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../utils/constants";


@Injectable({providedIn: 'root'})
export class PokemonService {


  constructor(private httpClient: HttpClient) { }

  async getDataListPokemons() {
    return await this.httpClient
      .get<any>(Constants.URL_POKEMON_API)
      .toPromise();

  }

}
