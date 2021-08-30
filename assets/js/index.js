resolucao = () =>  {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var screenWidth = screen.width;
    var screenHeight = screen.height;
    
    document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight; 

  };
  
  resolucao();
  window.addEventListener('resize', function(){
    resolucao();
  });