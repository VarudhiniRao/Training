$(document).ready(function(){

    $("#home").click(function(){
        $.ajax({url: "home.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#scooby").click(function(){
        $.ajax({url: "scooby.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#minion").click(function(){
        $.ajax({url: "minion.html", success: function(result){
            $("#header").html(result);
        }});
    });
    $("#bravo").click(function(){
        $.ajax({url: "jhonny.html", success: function(result){
            $("#header").html(result);
        }});
    });

});
