import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Player } from "../player/player";
import { PlayerComponent } from "../player/player.component";
import { PlayerService } from "../player/player.service";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player;
  playerId: number;

  constructor(
    private _playerService: PlayerService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._route.params.subscribe( params => this.playerId = +params['id']);
  }

  ngOnInit() : void {
      this._playerService.getPlayer(this.playerId)
        .subscribe(response => {
          this.player = response;
        });
  }

  onBack() : void {
    this._router.navigate(['/']);
  }

}
