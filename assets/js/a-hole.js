(function($) {
  
  $.fn.ahole = function(){ 
  
  var element = this;
  
  $(element).hover(function() {
    //what's the size of the stage?
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();
    
    var min = 1;
    var maxWidth = viewportWidth;
    var maxHeight = viewportHeight;
    
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //move it!
    $(this).offset({ top: getRandomInt(min, maxHeight), left: getRandomInt(min,maxWidth) });
  });
  
  };  

}) (jQuery);