"use strict";
var PreloadState = function(game){}

PreloadState.prototype = {
	preload: function(){
		//create loading animations
		var loading = this.game.add.sprite(this.game.world.centerX - 180, this.game.world.centerY - 30, 'load', 0);
		loading.animations.add('move', [1, 2, 3, 4, 5, 6, 7], 10, true, true);
		loading.animations.play('move');
		
		//load everything else
		this.game.laod.image('canvasBackground', ' assets/canvas.png');
		this.game.load.image('car', 'assets/car.png');
	},
	create: function(){
		this.game.state.start("menu");
	}
}
