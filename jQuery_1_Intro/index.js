// $("h1").css("color", "red");
// console.log($("h1").css("color"));
// $("h1").eq(0).css("color", "red");

// $("h1").addClass("big-title margin");
// $("h1").removeClass("big-title");
// $("h1").toggleClass("big-title");
// $("h1").toggleClass("big-title");
// $("h1").addClass("big-title");
// console.log($("h1").hasClass("margin"));

// $("h1").text("Bye");
// $("h2").html("<em>Tell me</em>");

// $("img").attr("src", "tom1.png");
// console.log($("a").attr("href"));

// $("h1").eq(0).click(function() {
//     $("h1").eq(0).css("color", "red");
// });
// $(document).keypress(function(event){
//     console.log(event);
// });
// $(document).keypress(function(event){
//     $("h1").eq(0).text(event.key);
// });
// $("h1").on("mouseover", function(event){
//     $("h1").css("color", "purple");
// });

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

$(document).on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5}); // insert css, only numeric value css rules
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});