"use strict";
var CanvasState = function(game){
var bmd, screen, car;
var loopButton, rightButton, leftButton, lineButton;

}

CanvasState.prototype = {
	create: function(){
		var backGround = this.game.add.sprite('canvasBackground');
		bmd = game.add.bitmapData(1840,1840);
		screen - this.game.add.sprite(0,0, bmd);
		
		this.car = this.game.add.sprite(game.world.centerX, game.world.centerY, 'car');
		this.car.anchor.setTo(0, 0.5); 
		this.game.physics.enable(this.car, Phaser.Physics.ARCADE);
		this.car.body.collideWorldBunds = true;
		//Buttons
		this.loopButton = this.game.button(0, 0, 'loop', this.loop, this);
		this.rightButton = this.game.button(0, 0, 'right', this.right, this);
		this.leftButton = this.game.button(0, 0, 'left', this.left, this);
		this.lineButton = this.game.button(0, 0, 'line', this.line, this);
	},
	loop: function(){
		
		
	},
	right: function(){
		
		
	},
	left: function(){
		
		
	},
	line: function(){
		
		
	},
}
