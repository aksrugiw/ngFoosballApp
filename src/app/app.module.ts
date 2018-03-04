import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerService } from "./player/player.service";
import { LobbyComponent } from './lobby/lobby.component';

const appRoutes: Routes = [
  { path: 'player/:id', component: PlayerDetailsComponent },
  { path: '', component: LobbyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailsComponent,
    LobbyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
