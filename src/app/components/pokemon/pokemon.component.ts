import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$!: Observable<any>
  pokemon: string = ''

  constructor(private apiS: ApiService) { 
    this.pokemon$ = this.apiS.searchPokemon('gyarados')
  }

  ngOnInit(): void {
  }

  searchPokemon(){
    if(this.pokemon.length > 2){

      this.pokemon$ = this.apiS.searchPokemon(this.pokemon.toLocaleLowerCase())
    }
  }

}
