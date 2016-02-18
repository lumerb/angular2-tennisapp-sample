System.register(['angular2/core', './player.service', 'angular2/router'], function(exports_1) {
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
    var core_1, player_service_1, router_1;
    var PlayerInfo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PlayerInfo = (function () {
                function PlayerInfo(_playerService, _router) {
                    this._playerService = _playerService;
                    this._router = _router;
                }
                PlayerInfo.prototype.getGreats = function () {
                    var _this = this;
                    this._playerService.getPlayers().then(function (players) { return _this.players = players; });
                };
                PlayerInfo.prototype.ngOnInit = function () {
                    this.getGreats();
                };
                PlayerInfo.prototype.getPlayer = function (rank) {
                    var _this = this;
                    this._playerService.getPlayer(rank).then(function (player) {
                        _this.player = player;
                        console.log(player.name);
                    });
                };
                PlayerInfo.prototype.goPlayerPage = function (player) {
                    this._router.navigate(['PlayerPage', { id: player.rank }]);
                };
                PlayerInfo = __decorate([
                    core_1.Component({
                        selector: 'player-info',
                        template: "\n\t\t<div class = \"players\">\n\t\t<h3 *ngFor = '#player of players' (click) = 'goPlayerPage(player)'><span class=\"nos\">{{player.rank}}</span> <span class = \"names\">{{player.name}}</span></h3>\n\t\t</div>\n\t",
                        styleUrls: ['app/styles.css'],
                    }), 
                    __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.Router])
                ], PlayerInfo);
                return PlayerInfo;
            }());
            exports_1("PlayerInfo", PlayerInfo);
        }
    }
});
//# sourceMappingURL=player-info.component.js.map