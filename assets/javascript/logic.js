$(document).ready(function() {
    console.log("ready!");

      
    // FUNCTIONS FOR NAVIGATION

    $('div.nav a').on('click', function() {
      event.preventDefault();
      if ($(this).is('#home')) {
        // WHEN HOME IS CLICKED: 
        // changes border color to blue
        console.log("this changed");
        $('div.border#left, #top, #right, #bottom').css('background-color', 'rgb(153, 204, 255)');

      } else if ($(this).is('#about')) {
         // WHEN ABOUT IS CLICKED: 
        // changes border color to yellow, displays contact
        $('div.border#left, #top, #right, #bottom').css('background-color', 'rgb(255, 203, 41)');

      } else if ($(this).is('#contact')) {
        // WHEN CONTACT IS CLICKED: 
        // changes border color to green, displays contact
        $('div.border#left, #top, #right, #bottom').css('background-color', '#008d51');
        $('div.contactPage').css('display', 'inline');
        
      } else if ($(this).is('#feed')) {
        // WHEN CONTACT IS CLICKED: 
        // changes border color to green, displays contact
        $('div.border#left, #top, #right, #bottom').css('background-color', 'rgb(43, 43, 43)');
      }
    });

  // ENDS FUNCTIONS FOR NAVIGATION 

   

  // ANIMATIONS FOR NAVIGATION
  $('div.nav a').on('click', function() {
    event.preventDefault();
    if ($(this).hasClass('--linked')) {
      $(this).removeClass('--linked');
    } else {
      $('a.--linked').removeClass('--linked')
      $(this).addClass('--linked');
    }
  });
      

  
  
  });
  