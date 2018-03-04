import { Component, OnInit } from '@angular/core';

import { Player } from "../player/player";
import { PlayerService } from "../player/player.service";
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  playerList: Player[];

  constructor(private _playerService: PlayerService) {}

  ngOnInit() {
    this._playerService.fetchPlayers()
      .subscribe(response => {
        this.playerList = response;
      });
  }

}
