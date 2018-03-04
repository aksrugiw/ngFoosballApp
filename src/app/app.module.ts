import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerService } from "./player/player.service";
import { LobbyComponent } from './lobby/lobby.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  { path: 'player/:id', component: PlayerDetailsComponent },
  { path: 'game/:state', component: GameComponent },
  { path: '', component: LobbyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailsComponent,
    LobbyComponent,
    GameComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
