import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResults } from 'src/app/models/character-results';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<CharacterResults> {
    return this._http.get<CharacterResults>(this.url);
  }

  getCharacter(id): Observable<Character> {
    if(id) return this._http.get<Character>(this.url+'/'+id);
  }
}
