"use strict";
var StoreState = function(game){

}

StoreState.prototype = {
	create: function(){
		
		
	},
	goToLoto: function(){
		this.game.state.start('loto');
	}
	
}
