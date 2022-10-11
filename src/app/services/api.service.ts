import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import StorageHelper from '../libs/helpers/storage.helper';
import { ApiEndpoints } from '../utils/apiendpoints.class';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(form: any){
    return this.http.post(environment.BASE_URL + ApiEndpoints.LOG_IN, form)
  }

  refreshToken(): Observable<any>{
    return this.http.post(environment.BASE_URL + ApiEndpoints.REFRESH_TOKEN, {session: StorageHelper.getItem('session')})
  }

  searchRickAndMortyCharacters(character: string){
    return this.http.post(environment.BASE_URL + ApiEndpoints.RICK_AND_MORTY, {endpoint: `character/?name=${character}`})
  }

  searchPokemon(pokemon: string){
    return this.http.post(environment.BASE_URL + ApiEndpoints.POKEMON, {endpoint: `pokemon/${pokemon}`})
  }
}
