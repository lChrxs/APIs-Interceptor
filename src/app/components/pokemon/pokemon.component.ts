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
    this.pokemon$ = this.apiS.searchPokemon('gyarados').pipe(
      tap(console.log)
    )
  }

  ngOnInit(): void {
  }

  searchPokemon(){
    this.pokemon$ = this.apiS.searchPokemon(this.pokemon).pipe(
      tap(console.log)
    )
  }

}
