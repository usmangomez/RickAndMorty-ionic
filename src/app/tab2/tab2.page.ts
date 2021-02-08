import { Component } from '@angular/core';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  locations:any;

  constructor(private _character:CharacterService) {
    this._character.getLocations().subscribe(res => {
      console.log(res.results);
      this.locations = res.results;
    })
  }

}
