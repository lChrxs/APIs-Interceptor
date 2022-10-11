import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, tap } from 'rxjs';
import { Character } from 'src/app/interfaces/rick-and-morty.interface';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
  
  character: string = ''
  character$!: Observable<Character[]>

  constructor(public apiS: ApiService) { 
    
    this.character$ = this.apiS.searchRickAndMortyCharacters('Morty')
  }

  ngOnInit(): void { }

  searchCharacter(){
    if(this.character.length > 3){

      this.character$ = this.apiS.searchRickAndMortyCharacters(this.character.toLowerCase())
    }
  }

}
