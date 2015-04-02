"use strict";
var WinState = function(game){
}

WinState.prototype = {
	create: function(){
		var background = this.game.add.sprite(0,0, 'winScreen');
	}
}
