

window.onscroll = function () {navbarStick()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navbarStick() {
  if (window.scrollY >= sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

$(".dropdown").click(function() {
  $(".navbar").addClass("responsive");

  $(".navbar a").click(function() {
    $(".navbar").removeClass("responsive");
  })
});
