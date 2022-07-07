import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import {HttpClientModule} from "@angular/common/http";
import {PokemonService} from "./services/pokemon.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogComponent} from "./pokemon-list/dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
