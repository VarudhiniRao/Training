$(document).ready(function(){



function playerToggle(){
      var ticplayer1 = $(".player1").hasClass("active_player");
      var ticplayer2 = $(".player2").hasClass("active_player");


      if(ticplayer1){

       $(".player1").removeClass("active_player");
       $(".player2").addClass("active_player");


      }
      if(ticplayer2){
        $(".player1").addClass("active_player");
        $(".player2").removeClass("active_player");

      }
    
}

$(".header1").click(playerToggle);
$(".header2").click(playerToggle);
$(".header3").click(playerToggle);
$(".header4").click(playerToggle);

});
