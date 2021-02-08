import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  transform(characters: Character[], args: string): Character[] {

    let a: Character[] = [];

    for (const character of characters) {
      if(character.name.toLowerCase().indexOf(args.toLowerCase()) > -1) a.push(character);
    }

    return a;
  }

}
