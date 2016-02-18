import {Component} from 'angular2/core';
import {Player} from './player.interface';
import {Players} from './player.info';
import {PlayerService} from './player.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({

	selector: 'player-info',
	template: `
		<div class = "players">
		<h3 *ngFor = '#player of players' (click) = 'goPlayerPage(player)'><span class="nos">{{player.rank}}</span> <span class = "names">{{player.name}}</span></h3>
		</div>
	`,
	styleUrls: ['app/styles.css'],

})
export class PlayerInfo implements OnInit{

	 public players: Player[];

	 constructor(private _playerService: PlayerService, private _router: Router){}

	 getGreats(){

		 this._playerService.getPlayers().then(players => this.players = players);
	 }

	 ngOnInit(){

		 this.getGreats();
	 }


	 getPlayer(rank: number){

		 this._playerService.getPlayer(rank).then(player => {
			this.player = player;
			 console.log(player.name);
		 });

	 }

	 goPlayerPage(player: Player){

	 	this._router.navigate(['PlayerPage',{id:player.rank}]);

	 }
}