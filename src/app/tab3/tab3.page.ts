import { Component } from '@angular/core';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  episodes:any;

  constructor(private _character:CharacterService) {
    this._character.getEpisodes().subscribe(res => {
      console.log(res.results);
      this.episodes = res.results;
    })
  }

}
