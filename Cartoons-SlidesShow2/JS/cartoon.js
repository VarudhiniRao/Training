$(document).ready(function(){

    $("#home").click(function(){
      console.log("hi")
        $.ajax({url: "Templates/home.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#scooby").click(function(){
        $.ajax({url: "Templates/scooby.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#minion").click(function(){
        $.ajax({url: "Templates/minion.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#bravo").click(function(){
        $.ajax({url: "Templates/jhonny.html", success: function(result){
            $("#header").html(result);
        }});
    });

});
