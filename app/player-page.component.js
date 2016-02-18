System.register(['angular2/core', 'angular2/router', './player.service'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, player_service_1;
    var PlayerPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            }],
        execute: function() {
            PlayerPage = (function () {
                function PlayerPage(_playerService, _routeParams) {
                    this._playerService = _playerService;
                    this._routeParams = _routeParams;
                }
                PlayerPage.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.player) {
                        var id = +this._routeParams.get('id');
                        console.log(id);
                        return this._playerService.getPlayer(id).then(function (player) { _this.player = player; console.log(_this.player.name); });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlayerPage.prototype, "player", void 0);
                PlayerPage = __decorate([
                    core_1.Component({
                        selector: 'player-page',
                        template: "\n\t\t<div *ngIf=\"player\">\n\t\t\t<h2>{{player.name}}</h2>\n\t\t\t<h3>Rank: {{player.rank}}</h3>\n\t\t\t<h3>Age: {{player.age}}</h3>\n\t\t\t<h3>Points: {{player.points | number}}</h3>\n\t\t\t<h3>Country: {{player.country}}</h3>\n\t\t\t<button [routerLink] = \"['Home']\">BACK TO PAGE</button>\n\t\t</div>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/styles.css'],
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.RouteParams])
                ], PlayerPage);
                return PlayerPage;
            }());
            exports_1("PlayerPage", PlayerPage);
        }
    }
});
//# sourceMappingURL=player-page.component.js.map