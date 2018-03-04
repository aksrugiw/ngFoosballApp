import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Player } from "./player";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {
  apiUrl = '/assets/players.json';

  constructor(private _http: HttpClient) { }
  
  public fetchPlayers() {
    return this._http.get<Player>(this.apiUrl);
  }

}
