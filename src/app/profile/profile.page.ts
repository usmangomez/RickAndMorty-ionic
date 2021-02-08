import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Character } from '../models/character';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  id:number;
  character:Character;

  constructor(private router:ActivatedRoute, private _character:CharacterService) { 
    this.id = +this.router.snapshot.paramMap.get('id');

    this._character.getCharacter(this.id).subscribe(res => {
      this.character = res;
      console.log(this.character);
    });
  }

  ngOnInit() {
  }

}
