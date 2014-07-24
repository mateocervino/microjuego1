(function() {
  'use strict';
  
  function Instruccions() {
    this.move = 'Press the arrows to move around.';
    this.moves = null;
    
    this.whattodo = 'You are a red blood cell,';
    this.whattodo1 = 'try to take all the oxigen.';
    this.careful = 'But take care of the bacteries';
    this.whattodos = null;
    this.wahttodos1 = null;
    this.carefuls = null;
   
   
  }
  
  Instruccions.prototype = {
    
    
    create: function () {
      var x = this.game.width 
        , y = this.game.height ;

	
    this.moves = this.add.text(100, 100, this.move, { fontSize: '34px', fill: '#fff' });
    this.whattodos = this.add.text(100, 200, this.whattodo, { fontSize: '34px', fill: '#fff' });
    this.whattodos1 = this.add.text(100, 300, this.whattodo1, { fontSize: '34px', fill: '#fff' });
    this.carefuls = this.add.text(100, 400, this.careful, { fontSize: '34px', fill: '#fff' });
      
      
      

      
      
      
       this.button = this.add.button(320, 600, 'button1', function(){this.game.state.start('menu') }, this, 2, 1, 0);
       this.button.anchor.setTo(0.5,0.5);
     
      
    },
    
    update: function () {

    },

   
  };

  window['game'] = window['game'] || {};
  window['game'].Instruccions = Instruccions;

}());
