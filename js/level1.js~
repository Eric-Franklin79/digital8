"use strict";
var Level1State = function(game){
//variables go here
var map, blockTile, player, cursors, jumpTimer, levelBar, playerToken, enemyToken, batteries;
var scoreText;
var pX = 0, score = 0;
}

Level1State.prototype = {
	create: function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 5000;
		//create tilemap
		this.map = this.game.add.tilemap('scene1TileMap');
		this.map.addTilesetImage('s1TileSet', 'scene1Tiles');
		var backgroundLayer = this.map.createLayer('background');
		this.blockTile = this.map.createLayer('blocked');
		this.map.setCollisionBetween(1, 100, true, 'blocked');
   	        backgroundLayer.resizeWorld();
   	        
   	        //create dude
   	        this.player = this.game.add.sprite(91, 480, 'player', 0);
   	        this.game.physics.arcade.enable(this.player);
   	        this.player.animations.add('walk', [1,0], 10);
   	        this.player.body.maxVelocity.x = 180;
   	        this.player.body.maxVelocity.y = 180;
   	        this.player.anchor.setTo(0.5, 0.5);
   	        
   	        //create battery objects
   	        this.batteries = this.game.add.group();
   	        this.batteries.enableBody = true;
   	        this.map.createFromObjects('battery', 7, 'battery', 0, true, false, this.batteries);
   	        this.batteries.setAll('body.allowGravity', false);
   	        this.batteries.callAll('animations.add', 'animations', 'spin', [0, 1, 2], 10, true, true);
   	        this.batteries.callAll('play', null, 'spin');
   	        
   	        //
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.game.camera.follow(this.player);
		this.jumpTimer = this.game.time.create(false);
		this.jumpTimer.add(750, this.fall, this);
		//
		this.levelBar = this.game.add.sprite(180, 580, 'levelBar');
		this.levelBar.fixedToCamera = true;
		this.playerToken = this.game.add.sprite(208, 582, 'playerToken');
		this.playerToken.fixedToCamera = true;
		this.enemyToken = this.game.add.sprite(180, 582, 'enemyToken');
		this.enemyToken.fixedToCamera = true;
		this.game.physics.arcade.enable(this.playerToken);
		this.game.physics.arcade.enable(this.enemyToken);
		//
		var styleS = { font: "bold 30px Verdana", fill: "#FFFFFF", align: "left" };
		this.scoreText = this.game.add.text(10, 60, 'Score: 0' , styleS);
		this.scoreText.fixedToCamera = true;
		this.pX = this.player.x;
		this.score = 0;
		
	},
	update: function(){
		this.game.physics.arcade.collide(this.player, this.blockTile);
		this.game.physics.arcade.overlap(this.player, this.batteries, this.powerUp, null, this);
		this.player.body.velocity.x = 0;
		this.playerToken.cameraOffset.x += (this.player.x - this.pX)/15;
		this.enemyToken.cameraOffset.x += .15;
		//
		if(this.game.input.pointer1.isDown){
			this.player.scale.x = 1;
			this.player.body.velocity.x = 180;
			this.player.animations.play('walk');
		   }
		   if (this.game.input.pointer2.isDown && this.player.body.onFloor()){
			this.player.body.acceleration.y = -50000000;
			this.jumpTimer.start();
		}
		//
		if(this.cursors.left.isDown){
			   this.player.scale.x = -1;
			   this.player.body.velocity.x = -180;
			   this.player.animations.play('walk');
		   }
		else if(this.cursors.right.isDown){
			this.player.scale.x = 1;
			this.player.body.velocity.x = 180;
			this.player.animations.play('walk');
		}
		if (this.cursors.up.isDown && this.player.body.onFloor()){
			this.player.body.acceleration.y = -50000000;
			this.jumpTimer.start();
		}
		this.pX = this.player.x;
		if(this.playerToken.x < this.enemyToken.x){
			this.game.state.start("gameOver");
		}
		if(this.player.x > 12119){
			this.game.state.start("win", true, false, this.score);
		}
	},
	fall: function(){
		this.player.body.acceleration.y = 0;
		this.jumpTimer.destroy();
		this.jumpTimer = this.game.time.create(false);
    		this.jumpTimer.add(750, this.fall, this);
	},
	powerUp: function(player, battery){
		battery.destroy();
		this.score += 50;
		this.scoreText.setText('Score: ' + String(this.score));
		
	}
	
}
