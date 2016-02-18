import {Component,OnInit,Input} from'angular2/core';
import {RouteParams,ROUTER_DIRECTIVES} from 'angular2/router';
import { PlayerService} from './player.service';	 
import {Player} from './player.interface';
import {Players} from './player.info';
@Component({
	selector: 'player-page',
	template: `
		<div *ngIf="player">
			<h2>{{player.name}}</h2>
			<h3>Rank: {{player.rank}}</h3>
			<h3>Age: {{player.age}}</h3>
			<h3>Points: {{player.points | number}}</h3>
			<h3>Country: {{player.country}}</h3>
			<button [routerLink] = "['Home']">BACK TO PAGE</button>
		</div>
	`,
	directives: [ROUTER_DIRECTIVES],
styleUrls: ['app/styles.css'],
})

export class PlayerPage implements OnInit{
	
	@Input() player: Player;

	constructor(private _playerService: PlayerService, private _routeParams: RouteParams){

	}

	ngOnInit(){
		if(!this.player){

			let id = +this._routeParams.get('id');
			console.log(id);
			return this._playerService.getPlayer(id).then(player => { this.player = player; console.log(this.player.name);});


		}
	}


} 