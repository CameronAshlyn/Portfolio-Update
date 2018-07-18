$(document).ready(function() {
    console.log("ready!");
  
    // home
    //border changes to black
    $("#home").on({
      click: function() {
        event.preventDefault();
        $("#left").css("background-color", "rgb(43, 43, 43)");
        $("#top").css("background-color", "rgb(43, 43, 43)");
        $("#right").css("background-color", "rgb(43, 43, 43)");
        $("#bottom").css("background-color", "rgb(43, 43, 43)");
      }
    });
  
    // about
    //border changes to green
    $("#about").on({
      click: function() {
        event.preventDefault();
        $("#left").css("background-color", "rgb(255, 208, 84)");
        $("#top").css("background-color", "rgb(255, 208, 84)");
        $("#right").css("background-color", "rgb(255, 208, 84)");
        $("#bottom").css("background-color", "rgb(255, 208, 84)");
        //
      }
    });
  
    // contact
    //border changes to green
    $("#contact").on({
      click: function() {
        event.preventDefault();
        $("#left").css("background-color", "#008d51");
        $("#top").css("background-color", "#008d51");
        $("#right").css("background-color", "#008d51");
        $("#bottom").css("background-color", "#008d51");
        $(".contactPage").css("display", "inline");
        $(this).toggleClass("--linked");
      };
      mouseover mouseout: function() {
          if ()
      }
      
    });
  // if clicked is true remove hover class if false hover
    $("#contact").on("mouseover mouseout", function(){
      $(this).toggleClass("--hover");
      
  });
  
    // feed
    //border changes to green
    $("#feed").on({
      click: function() {
        event.preventDefault();
        $("#left").css("background-color", "rgb(153, 204, 255)");
        $("#top").css("background-color", "rgb(153, 204, 255)");
        $("#right").css("background-color", "rgb(153, 204, 255)");
        $("#bottom").css("background-color", "rgb(153, 204, 255)");
      }
    });
  });
  