(function() {
  'use strict';

  function Game() {
	  
   this.player = null;
   this.oxigen = null;
   this.bactery = null;
   this.bactery1 = null;
   this.bactery2 = null;
  
   this.gameBackground = null;
   
   this.score = 0;
   this.scoreString = '';
   
   this.lives = null;
   this.totalLives = 6;
	
	
	
  }
	
	
  Game.prototype = {
	  

    create: function () {
    
    //Music
        this.music = this.game.add.audio('heartbeat', 1, true);
        this.music.play('', 0, 1, true);
        
        if (this.totalLives < 3)
    {
        this.music = this.game.add.audio('fastheartbeat', 1, true);
        this.music.play('', 0, 1, true);   
    }
        
	//Bacteries 
        this.bactery1 = this.add.group();
        this.bactery2 = this.add.group();
		
        
       
	//Background
        this.gameBackground=this.add.sprite(0, 0,'gamebackground');
        
 
	//redbloodcell
		this.player = this.add.sprite(400, 400, 'redblood');
		this.player.anchor.setTo(0.5, 0.5);
		
	//this.aliens = this.add.group();
	    this.createOxigen();
		
	//Score
		this.scoreString = 'Score : ';
		this.scoreText = this.add.text(10, 10, this.scoreString + this.score, { fontSize: '34px', fill: '#fff' });

	//Lives
		this.lives = this.add.group();
		this.add.text(500, 10, 'Lives:  ', { fontSize: '34px', fill: '#fff' });

		for (var i = 0; i < 6; i++) 
    {
        var live = this.lives.create(525 - 100 + (30 * i), 55, 'heart');
        live.anchor.setTo(0.5, 0.5);
        live.angle = 0;
        live.alpha = 0.4;
    }

	//time events repeated
		this.time.events.repeat(Phaser.Timer.SECOND * 3, 100, this.createOxigen, this);
		this.time.events.repeat(Phaser.Timer.SECOND * 25, 100, this.createBacteries, this);
		this.time.events.repeat(Phaser.Timer.SECOND * 6, 100, this.createBacteries1, this);
		this.time.events.repeat(Phaser.Timer.SECOND * 5, 100, this.createBacteries2, this);


   },
   
   
   
   //create oxigen and all the bacteries
	createOxigen: function () { 
		this.oxigen = this.add.sprite(this.world.randomX, this.world.randomY, 'oxigen');
 },
 
	createBacteries: function () {
		this.bactery = this.add.sprite(this.world.randomX, this.world.randomY, 'bactery');
},

	createBacteries1: function () {
		this.bactery1 = this.add.sprite(this.world.randomX, 0, 'bactery1');
},

	createBacteries2: function () {
		this.bactery2 = this.add.sprite(0, this.world.randomY, 'bactery2');
},


	playerTakesOxigen: function (player, oxigen) {

    //When the player gets an oxigen molecule
    
		oxigen.destroy();

    //  Increase the score
		this.score += 5;
		this.scoreText.content = this.scoreString + this.score;

},

	//Differets bacteries hits the player
	bacteryHitsPlayer: function (player,bactery) {
    
   
		bactery.destroy();
	

		this.live = this.lives.getFirstAlive();

		if (this.live)
		{
			this.live.kill();
			this.totalLives -= 1;
		}

    

    // When the player dies
		if (this.totalLives < 1)
		{
		   player.kill();
		
			this.restart();
		   
			
		}

},

	bactery1HitsPlayer: function (player,bactery1) {
    
    
		bactery1.destroy();
		

		this.live = this.lives.getFirstAlive();

		if (this.live)
		{
			this.live.kill();
			this.totalLives-=1;
		}

    // When the player dies
		if (this.totalLives < 1)
		{
		   player.kill();	   
			this.restart();		
		}

},

	bactery2HitsPlayer: function (player,bactery2) {   
    
		bactery2.destroy();	

		this.live = this.lives.getFirstAlive();

		if (this.live)
		{
			this.live.kill();
			this.totalLives-=1;
		}

	// When the player dies
		if (this.totalLives < 1)
		{
		   player.kill();	
			this.restart();
		}
},








	update: function () {
		
	//Player movement
		this.player.body.velocity.setTo(0, 0);
		

		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
		{
			this.player.x -= 10;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			this.player.x += 10;
		}

		if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
		{
			this.player.y -= 10;
		}
		else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
		{
			this.player.y += 10;
		}

	//Bacteries movement
		this.bactery1.y +=5;
		this.bactery2.x +=5;
		
	//All the physics for collisions
		this.game.physics.overlap(this.player, this.oxigen, this.playerTakesOxigen, null, this);
		this.game.physics.overlap(this.player, this.bactery, this.bacteryHitsPlayer, null, this);
		this.game.physics.overlap(this.player, this.bactery1, this.bactery1HitsPlayer, null, this);
		this.game.physics.overlap(this.player, this.bactery2, this.bactery2HitsPlayer, null, this);	

},
	
	//Restart function
	restart: function () {
		this.score = 0;
		this.totalLives = 3;
		this.button = this.add.button(120, this.world.centerY,'button', function(){this.game.state.start('game') }, this, 2, 1, 0);
		this.button.anchor.setTo(0.5,0.5);
},
		

  };

  window['game'] = window['game'] || {};
  window['game'].Game = Game;

}());

 
