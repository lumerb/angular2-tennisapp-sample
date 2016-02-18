import {Player} from './player.interface';
import {Players} from './player.info';
import {Injectable} from 'angular2/core';


@Injectable()
export class PlayerService{
	
	getPlayers(){

		return Promise.resolve(Players);

	}

	getPlayer(rank:number){
		return Promise.resolve(Players).then(
			players=> players.filter(player=> player === player)[rank-1]);
	}


}