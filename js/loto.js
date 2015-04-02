"use strict";
var LotoState = function(game){
//variables go here
var screen = 0, choice1 = 0, choice2 = 0, choice3 = 0, choice4 = 0, choice5 = 0, choice6 = 0, check = 0;
var money = 10;
var screen1, screen5, screen10, screen20, screen50;
var scratch1Button, scratch5Button, scratch10Button, scratch20Button, scratch50Button;
var choice1Cover, choice2Cover, choice3Cover, choice4Cover, choice5Cover, choice6Cover;
var choice1Text, choice2Text, choice3Text, choice4Text, choice5Text, choice6Text;
var ranGen;
}

LotoState.prototype = {
	create: function(){
		var background = this.game.add.sprite(0,0, 'lotoBackground');
		//
		this.money = 10;
		this.check = 0;
		this.ranGen = new Phaser.RandomDataGenerator();
		//buttons
		this.scratch1Button = this.game.add.button(78, 328, '1Button', this.scratch1, this);
		this.scratch5Button = this.game.add.button(231, 328, '5Button', this.scratch5, this);
		this.scratch10Button = this.game.add.button(78, 202, '10Button', this.scratch10, this);
		this.scratch20Button = this.game.add.button(231, 202, '20Button', this.scratch20, this);
		this.scratch50Button = this.game.add.button(149, 77, '50Button', this.scratch20, this);

		
		
		//game screens
		this.screen1 = this.game.add.sprite(50, 150, 'screen1');
		this.screen1.kill();
		this.screen5 = this.game.add.sprite(50, 150, 'screen5');
		this.screen5.kill();
		this.screen10 = this.game.add.sprite(50, 150, 'screen10');
		this.screen10.kill();
		this.screen20 = this.game.add.sprite(50, 150, 'screen20');
		this.screen20.kill();
		this.screen50 = this.game.add.sprite(50, 150, 'screen50');
		this.screen50.kill();
		//choice text
		var style = { font: "bold 20px Verdana", fill: "#000000", align: "left" };
		this.choice1Text = this.game.add.text(180, 200, '', style);
		this.choice2Text = this.game.add.text(230, 200, '', style);
		this.choice3Text = this.game.add.text(280, 200, '', style);
		this.choice4Text = this.game.add.text(180, 250, '', style);
		this.choice5Text = this.game.add.text(230, 250, '', style);
		this.choice6Text = this.game.add.text(280, 250, '', style);
		//covers
		this.choice1Cover = this.game.add.button(180, 200, 'cover', this.coverButton, this);
		this.choice1Cover.kill();
		this.choice2Cover = this.game.add.button(230, 200, 'cover', this.coverButton, this);
		this.choice2Cover.kill();
		this.choice3Cover = this.game.add.button(280, 200, 'cover', this.coverButton, this);
		this.choice3Cover.kill();
		this.choice4Cover = this.game.add.button(180, 250, 'cover', this.coverButton, this);
		this.choice4Cover.kill();
		this.choice5Cover = this.game.add.button(230, 250, 'cover', this.coverButton, this);
		this.choice5Cover.kill();
		this.choice6Cover = this.game.add.button(280, 250, 'cover', this.coverButton, this);
		this.choice6Cover.kill();
		//
		this.contButton = this.game.add.button(210, 335, 'contButton', this.reset, this);
		this.contButton.kill();
		//
		var styleM = { font: "bold 30px Verdana", fill: "#FFFFFF", align: "left" };
		this.moneyText = this.game.add.text(0, 0, "Wallet: $" + String(this.money), styleM);
		



	},
	update: function(){
		if(this.screen === 1){
			if(!(this.choice1Cover.alive)&&!(this.choice2Cover.alive)&&!(this.choice3Cover.alive)
				&&!(this.choice4Cover.alive)&&!(this.choice5Cover.alive)&&!(this.choice6Cover.alive)){
					//check win
					if(this.choice1 === 3){this.check++;}
					if(this.choice2 === 3){this.check++;}
					if(this.choice3 === 3){this.check++;}
					if(this.choice4 === 3){this.check++;}
					if(this.choice5 === 3){this.check++;}
					if(this.choice6 === 3){this.check++;}
					if(this.check > 2){
						this.money = this.money + 3;
						
						this.moneyText.setText("Wallet: $" + String(this.money));
					}
					this.screen = 0;
					//this.reset();
			}
		}
		else if(this.screen === 5){
			if(!(this.choice1Cover.alive)&&!(this.choice2Cover.alive)&&!(this.choice3Cover.alive)
				&&!(this.choice4Cover.alive)&&!(this.choice5Cover.alive)&&!(this.choice6Cover.alive)){
					//check win
					if(this.choice2 === this.choice1 || this.choice2 === this.choice4 || this.choice3 === this.choice1 || this.choice3 === this.choice4 
						|| this.choice5 === this.choice1 || this.choice5 === this.choice4 || this.choice6 === this.choice1 || this.choice6 === this.choice4){
							this.money += 10;
							this.moneyText.setText("Wallet: $" + String(this.money));
						}
					this.screen = 0;
			}
		}
		else if(this.screen === 10){
			if(!(this.choice1Cover.alive)&&!(this.choice2Cover.alive)&&!(this.choice3Cover.alive)
				&&!(this.choice4Cover.alive)&&!(this.choice5Cover.alive)&&!(this.choice6Cover.alive)){
					//check win
					if(this.choice2 === this.choice1 || this.choice2 === this.choice4 || this.choice3 === this.choice1 || this.choice3 === this.choice4 
						|| this.choice5 === this.choice1 || this.choice5 === this.choice4 || this.choice6 === this.choice1 || this.choice6 === this.choice4){
							this.money += 50;
							this.moneyText.setText("Wallet: $" + String(this.money));
						
					}
					this.screen = 0;
			}
		}
		else if(this.screen === 20){
			if(!(this.choice1Cover.alive)&&!(this.choice2Cover.alive)&&!(this.choice3Cover.alive)
				&&!(this.choice4Cover.alive)&&!(this.choice5Cover.alive)&&!(this.choice6Cover.alive)){
					//check win
					if(this.choice1 === this.choice4 || this.choice2 === this.choice4 || this.choice3 === this.choice4 
						|| this.choice5 === this.choice4 || this.choice6 === this.choice4){
							this.money += 80;
							this.moneyText.setText("Wallet: $" + String(this.money));
					}
					this.screen = 0;
			}
		}
		else if(this.screen === 50){//high low 50 50 win 25%
			if(!(this.choice4Cover.alive)){//high
				if(this.choice2 < this.choice5){
					this.money = this.money + 150
				}
				this.choice6Cover.kill();
			}
			else if(!(this.choice6Cover.alive)){//low
				if(this.choice2 > this.choice5){
					this.money = this.money + 150
				}
				this.choice4Cover.kill();
			}
		}
		else{
			if(this.money < 50){this.scratch50Button.kill();}
			if(this.money < 20){this.scratch20Button.kill();}
			if(this.money < 10){this.scratch10Button.kill();}
			if(this.money < 5){this.scratch5Button.kill();}
			if(this.money < 1){
				this.game.state.start("gameOver");
			}
			if(this.money > 2500){
				this.game.state.start("win");
			}
		}
	},
	scratch1: function(){
		
		//kill buttons
		this.scratch1Button.kill();
		this.scratch5Button.kill();
		this.scratch10Button.kill();
		this.scratch20Button.kill();
		this.scratch50Button.kill();
		//
		this.screen1.revive();
		this.contButton.revive();
		//get random nums
		this.choice1 = this.ranGen.integerInRange(1, 3);
		this.choice2 = this.ranGen.integerInRange(1, 3);
		this.choice3 = this.ranGen.integerInRange(1, 3);
		this.choice4 = this.ranGen.integerInRange(1, 3);
		this.choice5 = this.ranGen.integerInRange(1, 3);
		this.choice6 = this.ranGen.integerInRange(1, 3);
		//set Text
		this.choice1Text.setText(String(this.choice1));
		this.choice2Text.setText(String(this.choice2));
		this.choice3Text.setText(String(this.choice3));
		this.choice4Text.setText(String(this.choice4));
		this.choice5Text.setText(String(this.choice5));
		this.choice6Text.setText(String(this.choice6));
		//revive covers
		this.choice1Cover.revive();
		this.choice2Cover.revive();
		this.choice3Cover.revive();
		this.choice4Cover.revive();
		this.choice5Cover.revive();
		this.choice6Cover.revive();
		
		this.money = this.money - 1;
		this.moneyText.setText("Wallet: $" + String(this.money));
		this.screen = 1;
	},
	scratch5: function(){
		//kill buttons
		this.scratch1Button.kill();
		this.scratch5Button.kill();
		this.scratch10Button.kill();
		this.scratch20Button.kill();
		this.scratch50Button.kill();
		//
		this.screen5.revive();
		this.contButton.revive();
		//get random nums
		this.choice1 = this.ranGen.integerInRange(1, 12);
		this.choice2 = this.ranGen.integerInRange(1, 12);
		this.choice3 = this.ranGen.integerInRange(1, 12);
		this.choice4 = this.ranGen.integerInRange(1, 12);
		this.choice5 = this.ranGen.integerInRange(1, 12);
		this.choice6 = this.ranGen.integerInRange(1, 12);
		//set Text
		this.choice1Text.setText(String(this.choice1));
		this.choice2Text.setText(String(this.choice2));
		this.choice3Text.setText(String(this.choice3));
		this.choice4Text.setText(String(this.choice4));
		this.choice5Text.setText(String(this.choice5));
		this.choice6Text.setText(String(this.choice6));
		//revive covers
		this.choice1Cover.revive();
		this.choice2Cover.revive();
		this.choice3Cover.revive();
		this.choice4Cover.revive();
		this.choice5Cover.revive();
		this.choice6Cover.revive();
		
		
		this.money = this.money - 5;
		this.moneyText.setText("Wallet: $" + String(this.money));
		this.screen = 5;
	},
	scratch10: function(){
		//kill buttons
		this.scratch1Button.kill();
		this.scratch5Button.kill();
		this.scratch10Button.kill();
		this.scratch20Button.kill();
		this.scratch50Button.kill();
		//
		this.screen10.revive();
		this.contButton.revive();
		//get random nums
		this.choice1 = this.ranGen.integerInRange(1, 25);
		this.choice2 = this.ranGen.integerInRange(1, 25);
		this.choice3 = this.ranGen.integerInRange(1, 25);
		this.choice4 = this.ranGen.integerInRange(1, 25);
		this.choice5 = this.ranGen.integerInRange(1, 25);
		this.choice6 = this.ranGen.integerInRange(1, 25);
		//set Text
		this.choice1Text.setText(String(this.choice1));
		this.choice2Text.setText(String(this.choice2));
		this.choice3Text.setText(String(this.choice3));
		this.choice4Text.setText(String(this.choice4));
		this.choice5Text.setText(String(this.choice5));
		this.choice6Text.setText(String(this.choice6));
		//revive covers
		this.choice1Cover.revive();
		this.choice2Cover.revive();
		this.choice3Cover.revive();
		this.choice4Cover.revive();
		this.choice5Cover.revive();
		this.choice6Cover.revive();
		
		
		this.money = this.money - 10;
		this.moneyText.setText("Wallet: $" + String(this.money));
		this.screen = 10;
	},
	scratch20: function(){
		//kill buttons
		this.scratch1Button.kill();
		this.scratch5Button.kill();
		this.scratch10Button.kill();
		this.scratch20Button.kill();
		this.scratch50Button.kill();
		//
		this.screen20.revive();
		this.contButton.revive();
		//get random nums
		this.choice1 = this.ranGen.integerInRange(1, 25);
		this.choice2 = this.ranGen.integerInRange(1, 25);
		this.choice3 = this.ranGen.integerInRange(1, 25);
		this.choice4 = this.ranGen.integerInRange(1, 25);
		this.choice5 = this.ranGen.integerInRange(1, 25);
		this.choice6 = this.ranGen.integerInRange(1, 25);
		//set Text
		this.choice1Text.setText(String(this.choice1));
		this.choice2Text.setText(String(this.choice2));
		this.choice3Text.setText(String(this.choice3));
		this.choice4Text.setText(String(this.choice4));
		this.choice5Text.setText(String(this.choice5));
		this.choice6Text.setText(String(this.choice6));
		//revive covers
		this.choice1Cover.revive();
		this.choice2Cover.revive();
		this.choice3Cover.revive();
		this.choice4Cover.revive();
		this.choice5Cover.revive();
		this.choice6Cover.revive();
		
		
		this.money = this.money - 20;
		this.moneyText.setText("Wallet: $" + String(this.money));
		this.screen = 20;
	},
	scratch50: function(){
		//kill buttons
		this.scratch1Button.kill();
		this.scratch5Button.kill();
		this.scratch10Button.kill();
		this.scratch20Button.kill();
		this.scratch50Button.kill();
		//
		this.screen50.revive();
		this.contButton.revive();
		//get random nums
		this.choice2 = this.ranGen.integerInRange(1, 3);
		this.choice5 = this.ranGen.integerInRange(1, 3);
		//set Text
		this.choice2Text.setText(String(this.choice2));
		this.choice5Text.setText(String(this.choice5));
		//revive covers
		this.choice6Cover.revive();
		this.choice4Cover.revive();
		this.choice5Cover.revive();
		
		
		this.money = this.money - 50;
		this.moneyText.setText("Wallet: $" + String(this.money));
		this.screen = 50;
	},
	goToStore: function(){
		this.game.state.start("store");
	},
	reset: function(){
		this.screen = 0;
		//kill screens
		this.screen1.kill();
		this.screen5.kill();
		this.screen10.kill();
		this.screen20.kill();
		this.screen50.kill();
		this.contButton.kill();
		//reset text
		this.choice1Text.setText('');
		this.choice2Text.setText('');
		this.choice3Text.setText('');
		this.choice4Text.setText('');
		this.choice5Text.setText('');
		this.choice6Text.setText('');
		//kill covers
		this.choice1Cover.kill();
		this.choice2Cover.kill();
		this.choice3Cover.kill();
		this.choice4Cover.kill();
		this.choice5Cover.kill();
		this.choice6Cover.kill();
		//reset choices
		this.choice1 = 0;
		this.choice2 = 0;
		this.choice3 = 0;
		this.choice4 = 0;
		this.choice5 = 0;
		this.choice6 = 0;
		//revie buttons
		this.scratch1Button.revive();
		this.scratch5Button.revive();
		this.scratch10Button.revive();
		this.scratch20Button.revive();
		this.scratch50Button.revive();
	},
	coverButton: function(button){
		button.kill();
	}
	
}
