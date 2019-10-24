
$(document).ready(function (){
     $("#click").click(function (){
       console.log("Stuff");
         $('html, body').animate({
             scrollTop: $("#faq").offset().top
         }, 1000);
     });
});
 

