(function () {
   modoRetrato();
   
   $(window).resize(function () {
      modoRetrato("#ID_body");
   });

   function modoRetrato(body){
      if ( screen.width < screen.height ){
         $(body).addClass("modo-retrato");
      } else {
         $(body).removeClass("modo-retrato");
      }
   }
})();