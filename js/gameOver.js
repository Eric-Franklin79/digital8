"use strict";
var GameOverState = function(game){}

GameOverState.prototype = {
	create: function(){
		var background = this.game.add.sprite(0,0, 'gameOverScreen');
	}	
}
