import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Character } from '../models/character';
import { CharacterService } from '../services/character/character.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  characters: Character[]=[]
  searchTerm: string ='';

  constructor(private _character: CharacterService, public navCtrl: NavController) {
    this._character.getCharacters().subscribe(res=>{
      this.characters=res.results;
    });
  }

}
