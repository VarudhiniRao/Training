$(document).ready(function(){
  $(".active_block").click(function(activeTarget){
      var ticPlayer=activeTarget.target;

      var ticplayer1 = $(".player1").hasClass("active_player");
      var ticplayer2 = $(".player2").hasClass("active_player");


      if(ticplayer1 && !ticplayer2){

       $(".player1").removeClass(".active_player");
       $(".player2").addClass(".active_player");
       $("ticPlayer").css("background-color:purple");


      }
      if(!ticplayer1 && ticplayer2){
        $(".player1").addClass(".active_player");
        $(".player2").removeClass(".active_player");
        $("ticPlayer").css("background-color:orange");
      }

  });



});
