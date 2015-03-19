"use strict";
var BootState = function(game){}

BootState.prototype = {
	preload: function(){
		this.game.load.atlasJSONHash('load', 'assets/load.png', 'assets/load.json');
	},
	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.setScreenSize();
		this.game.state.start("preload");
	}
}
