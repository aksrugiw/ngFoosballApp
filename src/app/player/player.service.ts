import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Player } from "./player";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {
  apiUrl = '/assets/players.json';

  constructor(private _http: HttpClient) { }
  
  fetchPlayers() : Observable<Player[]> {
    return this._http.get<Player[]>(this.apiUrl);
  }

  getPlayer(playerId: number) : Observable<Player> {
    return this._http.get<Player[]>(this.apiUrl)
            .map(players => players.find(p => p.id === playerId));
  }

}
