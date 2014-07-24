(function() {
  'use strict';
  
  function Menu() {
    this.titleTxt = null;
    this.optionsTxt = null;
    this.highscoreTxt = null;
    //this.mummy = null;
   
   
  }
  
  Menu.prototype = {
    
    
    create: function () {
      var x = this.game.width 
        , y = this.game.height ;


  
      
      this.background=this.add.sprite(0, 0, 'menubackground');
      this.background.anchor.setTo(0, 0, 'background');
      

      
      
      
       this.button = this.add.button(320, this.world.centerY, 'button', function(){this.game.state.start('game') }, this, 2, 1, 0);
       this.button.anchor.setTo(0.5,0.5);
       
        this.button = this.add.button(320, 650, 'button1', function(){this.game.state.start('instruccions') }, this, 2, 1, 0);
       this.button.anchor.setTo(0.5,0.5);
     
      
    },
    
    update: function () {

    },

   
  };

  window['game'] = window['game'] || {};
  window['game'].Menu = Menu;

}());
