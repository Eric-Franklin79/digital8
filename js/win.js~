"use strict";
var WinState = function(game){
var points = 0;
}

WinState.prototype = {
	init: function(score){
		this.points = score;
	},
	create: function(){
		var background = this.game.add.sprite(0,0, 'winScreen');
		var playButton = this.game.add.button(1000, 575, 'continuedButton', this.menuScreen, this);
		var style = { font: "bold 30px Verdana", fill: "#000000", align: "left" };
		var styleS = { font: "bold 25px Verdana", fill: "#000000", align: "left" };
		var text = this.game.add.text(500,540, 'You\'ve Escaped, for now...', styleS);
		var scoreText = this.game.add.text(500, 580, 'Score: '  + String(this.points), style);
		
	},
	menuScreen: function(){
		this.game.state.start('menu');
		
	
	}
}
