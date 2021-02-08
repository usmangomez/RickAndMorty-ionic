import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResults } from 'src/app/models/character-results';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<CharacterResults> {
    return this._http.get<CharacterResults>('https://rickandmortyapi.com/api/character');
  }

  getCharacter(id): Observable<Character> {
    if(id) return this._http.get<Character>('https://rickandmortyapi.com/api/character/'+id);
  }

  getLocations() {
    return this._http.get<CharacterResults>('https://rickandmortyapi.com/api/location');
  }

  getEpisodes() {
    return this._http.get<CharacterResults>('https://rickandmortyapi.com/api/episode');
  }
}
