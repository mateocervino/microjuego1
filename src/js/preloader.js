(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
    //this.button = null;
    //this.button2 = null;
  }

  Preloader.prototype = {
        
    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(5.5, 5.5);
      
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
	  this.load.image('redblood', 'assets/Redbloodcell.png');
	  this.load.image('oxigen', 'assets/oxigen.png');
      this.load.image('bactery', 'assets/bactery.png');
      this.load.image('bactery1', 'assets/bactery1.png');
      this.load.image('bactery2', 'assets/bactery2.png');
      this.load.image('heart', 'assets/heart.png');
      this.load.audio('heartbeat', 'assets/heartbeat.mp3');
      this.load.audio('fastheartbeat', 'assets/fastheartbeat.mp3');  
      this.load.spritesheet('button', 'assets/startbuttom.png', 150, 150);
      this.load.spritesheet('button1', 'assets/instruccionsbuttom.png', 150, 150);
      this.load.image('menubackground', 'assets/menubackground.jpg');
      this.load.image('gamebackground', 'assets/gamebackground.jpg');
      
      
   
    },

    create: function () {
      this.asset.cropEnabled = false;
     
      
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['game'] = window['game'] || {};
  window['game'].Preloader = Preloader;

}());
