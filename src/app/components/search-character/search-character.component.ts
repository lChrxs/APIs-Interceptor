import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {
  
  character: string = ''
  character$!: Observable<any>

  constructor(public apiS: ApiService) { 
    console.log('Constructor');
    
    this.character$ = this.apiS.searchRickAndMortyCharacters('Morty').pipe(
      tap(console.log)
    )
  }

  ngOnInit(): void { }

  searchCharacter(){
    this.character$ = this.apiS.searchRickAndMortyCharacters(this.character).pipe(
      tap(console.log)
    )
  }

}
