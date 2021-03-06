"use strict";
var CanvasState = function(game){
var bmd, screen, car;
var loopButton, rightButton, leftButton, lineButton, redButton, greenButton, blueButton, blackButton, yellowButton;
var i = 0, j = 0; 
var camera;
var state, facing;
var color = "white";
}

CanvasState.prototype = {
	create: function(){
		this.game.world.setBounds(0, 0, 1840, 1840);
		var backGround = this.game.add.sprite(0, 0, 'canvasBackground');
		this.bmd = this.game.add.bitmapData(1840,1840);
		this.screen = this.game.add.sprite(0, 0, this.bmd);
		
		this.car = this.game.add.sprite(920, 300, 'car');
		this.car.anchor.setTo(0, 0.5);
		this.game.physics.enable(this.car, Phaser.Physics.ARCADE);
		this.car.body.collideWorldBunds = true;
		this.game.camera.follow(this.car, Phaser.Camera.FOLLOW_LOCKON);
		//Buttons
		//this.loopButton = this.game.add.button(0, 0, 'loop', this.loop, this);
		this.rightButton = this.game.add.button(60, 550, 'right', this.right, this);
		this.leftButton = this.game.add.button(115, 550, 'left', this.left, this);
		this.lineButton = this.game.add.button(5, 550, 'line', this.line, this);
		this.redButton = this.game.add.button(190, 550, 'redB', this.red, this);
		this.greenButton = this.game.add.button(245, 550, 'greenB', this.green, this);
		this.blueButton = this.game.add.button(300, 550, 'blueB', this.blue, this);
		this.yellowButton = this.game.add.button(355, 550, 'yellowB', this.yellow, this);
		this.blackButton = this.game.add.button(410, 550, 'blackB', this.black, this);
		this.whiteButton = this.game.add.button(465, 550, 'whiteB', this.white, this);
		this.doneButton = this.game.add.button(520, 550, 'doneB', this.done, this);
		//this.
		
		//
		this.lineButton.fixedToCamera = true;
		this.rightButton.fixedToCamera = true;
		this.leftButton.fixedToCamera = true;
		this.redButton.fixedToCamera = true;
		this.blueButton.fixedToCamera = true;
		this.yellowButton.fixedToCamera = true;
		this.greenButton.fixedToCamera = true;
		this.blackButton.fixedToCamera = true;
		this.whiteButton.fixedToCamera = true;
		this.doneButton.fixedToCamera = true;
		this.color = "white";
		this.facing = "right";
	},
	update: function(){
		if(this.state === "done"){
				
		}
		else{
		
			if(this.facing === "right"){
				this.bmd.rect(this.car.x, this.car.y - 23, 1, 46, this.color);
			}
			else if( this.facing === "up"){
				this.bmd.rect(this.car.x - 23, this.car.y , 46, 1, this.color);

			}
			else if(this.facing === "left"){
				this.bmd.rect(this.car.x, this.car.y - 23, 1, 46, this.color);
			}
			else if(this.facing === "down"){
				this.bmd.rect(this.car.x - 23, this.car.y , 46, 1, this.color);

			}
		}
		
	},
	loop: function(){
		
		this.state = "loop";
	},
	right: function(){
		if(this.facing === "right"){
			//right
			this.game.physics.arcade.moveToXY(this.car, this.car.x+25, this.car.y, 25,  1000);
			//down
			this.game.add.tween(this.car).to( { angle: 90 }, 1000, Phaser.Easing.Linear.None, true);
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y+25, 25,  1000);
			this.facing = "down";
		}
		else if(this.facing === "left"){
			//left
			this.game.physics.arcade.moveToXY(this.car, this.car.x-25, this.car.y, 25,  2000);
			this.game.add.tween(this.car).to( { angle: -90 }, 1000, Phaser.Easing.Linear.None, true);
			//up
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y-25, 25,  1000);
			this.facing = "up";
		}
		else if(this.facing === "up"){
			//up
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y - 25, 25,  2000);
			this.game.add.tween(this.car).to( { angle: 0 }, 1000, Phaser.Easing.Linear.None, true);
			//right
			this.game.physics.arcade.moveToXY(this.car, this.car.x + 25, this.car.y, 25,  1000);
			this.facing = "right";
		}
		else if(this.facing === "down"){
			//down
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y + 25, 25,  2000);
			this.game.add.tween(this.car).to( { angle: 180}, 1000, Phaser.Easing.Linear.None, true);
			//left
			this.game.physics.arcade.moveToXY(this.car, this.car.x - 25, this.car.y, 25,  1000);
			this.facing = "left";
		}
		this.state = "right";
	},
	left: function(){
		if(this.facing === "right"){
			//right
			this.game.physics.arcade.moveToXY(this.car, this.car.x+25, this.car.y, 25,  1000);
			//up
			this.game.add.tween(this.car).to( { angle: -90 }, 1000, Phaser.Easing.Linear.None, true);
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y-25, 25,  1000);
			this.facing = "up";
		}
		else if(this.facing === "left"){
			//left
			this.game.physics.arcade.moveToXY(this.car, this.car.x-25, this.car.y, 25,  2000);
			this.game.add.tween(this.car).to( { angle: 90 }, 1000, Phaser.Easing.Linear.None, true);
			//down
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y+25, 25,  1000);
			this.facing = "down";
		}
		else if(this.facing === "up"){
			//up
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y - 25, 25,  2000);
			this.game.add.tween(this.car).to( { angle: 180 }, 1000, Phaser.Easing.Linear.None, true);
			//left
			this.game.physics.arcade.moveToXY(this.car, this.car.x - 25, this.car.y, 25,  1000);
			this.facing = "left";
		}
		else if(this.facing === "down"){
			//down
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y + 25, 25,  2000);
			this.game.add.tween(this.car).to( { angle: 0 }, 1000, Phaser.Easing.Linear.None, true);
			//right
			this.game.physics.arcade.moveToXY(this.car, this.car.x + 25, this.car.y, 25,  1000);
			this.facing = "right";
		}
		this.state = "left";
	},
	line: function(){
		if(this.facing === "right"){
			this.game.physics.arcade.moveToXY(this.car, this.car.x+50, this.car.y, 25,  2000);
		}
		else if(this.facing === "left"){
			this.game.physics.arcade.moveToXY(this.car, this.car.x-50, this.car.y, 25,  2000);
		}
		else if(this.facing === "up"){
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y - 50, 25,  2000);
		}
		else if(this.facing === "down"){
			this.game.physics.arcade.moveToXY(this.car, this.car.x, this.car.y + 50, 25,  2000);
		}
		this.state = "line";
		
	},
	red: function(){
		this.color = "red";
	},
	green: function(){
		this.color = "green";
	},
	blue: function(){
		this.color = "blue";
	},
	yellow: function(){
		this.color = "yellow";
	},
	black: function(){
		this.color = "black";
	},
	white: function(){
		this.color = "white";
	},
	done: function(){
		this.state = "done";	
		this.car.kill();
		this.game.add.tween(this.screen.scale).to( { x: .652, y: .326 }, 2000, Phaser.Easing.Linear.None, true);
		this.game.camera.reset();
		this.lineButton.kill();
		this.rightButton.kill();
		this.leftButton.kill();
		this.redButton.kill();
		this.blueButton.kill();
		this.yellowButton.kill();
		this.greenButton.kill();
		this.blackButton.kill();
		this.whiteButton.kill();
		this.doneButton.kill();
	}
	
}
