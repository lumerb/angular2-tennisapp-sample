import {Component} from 'angular2/core';
import {Player} from './player.interface';
import {Players} from './player.info';
import {PlayerInfo} from './player-info.component';
import {PlayerService} from './player.service';
import {PlayerPage} from './player-page.component';
import {Home} from './home.component';


import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


@Component({

	selector: 'tennis-app',
	template: `
	<div class="container">
	<h1>{{title}}</h1>

	<a [routerLink]="['Home']" > HOME </a>
	<a [routerLink]="['PlayerInfo']" > PLAYERS </a>
	<div class = "content">
	<router-outlet ></router-outlet>
	</div>
	</div>


	`,
	styleUrls: ['app/styles.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [PlayerService, ROUTER_PROVIDERS]
})

@RouteConfig([
		{ path: '/players', name: 'PlayerInfo', component: PlayerInfo },
		{ path: '/', name: 'Home', component: Home, useAsDefault: true },
		{ path: '/player/:id', name: 'PlayerPage', component: PlayerPage }
	])
export class AppComponent{

	public title = 'Top 10 ATP Male Tennis Players';

}

