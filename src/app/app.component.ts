import { Component, OnInit } from '@angular/core';

import { PlayerService } from "./player/player.service";
import { PlayerComponent } from "./player/player.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  playerList;

  constructor(private _playerService: PlayerService) {}

  ngOnInit() {
    this._playerService.fetchPlayers()
      .subscribe(response => {
        this.playerList = response;
      });
  }
}
