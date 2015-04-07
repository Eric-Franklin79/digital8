"use strict";
var PreloadState = function(game){}

PreloadState.prototype = {
	preload: function(){
		//create loading animations
		var loading = this.game.add.sprite(this.game.world.centerX - 180, this.game.world.centerY - 30, 'load', 0);
		loading.animations.add('move', [1, 2, 3, 4, 5, 6, 7], 10, true, true);
		loading.animations.play('move');
		
		//load everything else
		this.game.load.image('canvasBackground', 'assets/canvas.png');
		this.game.load.image('car', 'assets/car.png');
		this.game.load.image('line', 'assets/lineButton.png');
		this.game.load.image('right', 'assets/right.png');
		this.game.load.image('left', 'assets/left.png');
		this.game.load.image('redB', 'assets/red.png');
		this.game.load.image('greenB', 'assets/green.png');
		this.game.load.image('blueB', 'assets/blue.png');
		this.game.load.image('yellowB', 'assets/yellow.png');
		this.game.load.image('blackB', 'assets/black.png');
		this.game.load.image('whiteB', 'assets/white.png');
		this.game.load.image('doneB', 'assets/doneButton.png');
	},
	create: function(){
		this.game.state.start("canvas");
	}
}
