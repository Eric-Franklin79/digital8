"use strict";
var HowState = function(game){
var map, blockTile, player, cursors, jumpTimer, batteries, left, right, up , battery;
var touch1, touch2;
}

HowState.prototype = {
	create: function(){
		var background = this.game.add.sprite(0,0, 'howToScreen');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 5000;
		//create tilemap
		this.map = this.game.add.tilemap('howToTileMap');
		this.map.addTilesetImage('s1TileSet', 'scene1Tiles');
		var backgroundLayer = this.map.createLayer('background');
		this.blockTile = this.map.createLayer('blocked');
		this.map.setCollisionBetween(1, 100, true, 'blocked');
   	        
   	        
   	        //create dude
   	        this.player = this.game.add.sprite(580, 550, 'player', 0);
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
		this.jumpTimer = this.game.time.create(false);
		this.jumpTimer.add(750, this.fall, this);
		//
		this.battery = this.game.add.sprite(32, 352, 'battery', 0);
		this.battery.animations.add('spin', [0,1,2], 10, true, true);
		this.battery.animations.play('spin');
		
		this.left = this.game.add.sprite(500, 112, 'left');
		this.right = this.game.add.sprite(597, 112, 'right');
		this.up = this.game.add.sprite(550, 13, 'up');
		var playButton = this.game.add.button(1201, 592, 'contButton', this.menuScreen, this);
		this.touch1 = this.game.input.addPointer();
		this.touch2 = this.game.input.addPointer();
	},
	update: function(){
		this.game.physics.arcade.collide(this.player, this.blockTile);
		this.game.physics.arcade.overlap(this.player, this.batteries, this.powerUp, null, this);
		this.player.body.velocity.x = 0;
		this.left.loadTexture('left');
		this.right.loadTexture('right');
		this.up.loadTexture('up');
		//touch
		if(this.game.input.pointer1.isDown){
			   this.player.scale.x = 1;
			   this.player.body.velocity.x = 180;
			   this.right.loadTexture('right2');
			   this.player.animations.play('walk');
		   }
		   if (this.game.input.pointer2.isDown && this.player.body.onFloor()){
			this.player.body.acceleration.y = -50000000;
			this.up.loadTexture('up2');
			this.jumpTimer.start();
		}
		//
		if(this.cursors.left.isDown){
			   this.player.scale.x = -1;
			   this.player.body.velocity.x = -180;
			   this.player.animations.play('walk');
			   this.left.loadTexture('left2');
		   }
		else if(this.cursors.right.isDown){
			this.player.scale.x = 1;
			this.player.body.velocity.x = 180;
			this.right.loadTexture('right2');
			this.player.animations.play('walk');
		}
		
		if (this.cursors.up.isDown && this.player.body.onFloor()){
			this.player.body.acceleration.y = -50000000;
			this.up.loadTexture('up2');
			this.jumpTimer.start();
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
	},
	menuScreen: function(){
		this.game.state.start('menu');	
	}
	
	
	
}
