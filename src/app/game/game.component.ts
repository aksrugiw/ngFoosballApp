import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Player } from "../player/player";
import { PlayerService } from "../player/player.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameState: string;
  playerList: Player[];
  selectedPlayer: Player;
  teams = [
    {
      id: 1,
      name: 'Team A',
      players: []
    },
    {
      id: 2,
      name: 'Team B',
      players: []
    },
  ];
  gameResults = {
    playerScores: [],
    winnersTeamId: null
  };
  actualTeam;
  invitingPlayers: boolean = false;
  errorMessage = {
    play: '',
    invite: ''
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _playerService: PlayerService
  ) {
    this._route.params.subscribe( params => this.gameState = params['state']);
  }

  ngOnInit() {
    this._playerService.fetchPlayers()
      .subscribe(response => {
        this.playerList = response;
      });
  }

  setActualTeam(team) : void {
    this.actualTeam = team;
    this.invitingPlayers = true;
  }

  addToActualTeam() : void {
    let actualTeamIndex = this.actualTeam.id - 1;
    let otherTeamIndex = 1 - actualTeamIndex;
    let isMemberOfOtherTeam = this.teams[otherTeamIndex].players.indexOf(this.selectedPlayer) > -1;
    this.errorMessage.invite = '';

    if (this.selectedPlayer === undefined) {
      this.errorMessage.invite = 'Please choose a player';
      return;
    }
    else if (this.actualTeam.players.includes(this.selectedPlayer)) {
      this.errorMessage.invite = 'This player is already a member';      
      return;
    }
    else {
      if(isMemberOfOtherTeam) {
        let indexInOtherTeam = this.teams[otherTeamIndex].players.indexOf(this.selectedPlayer);
        // remove from the other team
        this.teams[otherTeamIndex].players.splice(indexInOtherTeam, 1);
      }
      this.teams[actualTeamIndex].players.push(this.selectedPlayer);

    }
  }

  playGame() : void {
    if((this.teams[0].players.length === 2 || this.teams[0].players.length === 4)
      && this.teams[1].players.length === 2 || this.teams[1].players.length === 4) {
      this.gameState = 'start';
      this._router.navigate(['/game', this.gameState]);
    }
    else {
      this.errorMessage.play = 'Teams are incomplete';
        return;
    }
  }

  saveGame() : void {
    for(let i = 0; i < this.teams.length; i++) {
      this.teams[i].players.forEach(player => {
        player.goalsScored += this.gameResults.playerScores[player.name];
        player.games.played++;
        if(this.gameResults.winnersTeamId === this.teams[i].id) {
          player.games.won++;
        }
      })
    }
    this.gameState = 'result';
    this._router.navigate(['/game', this.gameState]);
  }

}