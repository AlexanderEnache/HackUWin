
$(document).ready(function (){
    $("#about-scroll").click(function (){
      console.log("Stuff");
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#sponsor-scroll").click(function (){
      console.log("Stuff");
        $('html, body').animate({
            scrollTop: $("#sponsor").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#faq-scroll").click(function (){
      console.log("Stuff");
        $('html, body').animate({
            scrollTop: $("#faq").offset().top
        }, 1000);
    });
});

 

