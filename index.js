

$(".dropdown").click(function() {
  $(".navbar").addClass("responsive");

  $(".navbar a").click(function() {
    $(".navbar").removeClass("responsive");
  })
});

$('.dropdown-container').click(function(){
  $(this).find('p').toggleClass("hide-info");
});
