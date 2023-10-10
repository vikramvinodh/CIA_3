import $ from 'jquery';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

}

var cards = document.querySelectorAll('.schedule-box-grid-card');

[...cards].forEach((card) => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
});



function flip() {
  var flipcard = document.querySelectorAll(".flip-card");

  for (var i = 0; i < flipcard.length; i++) {

    var windowHeight = window.innerHeight;
    var elementTop = flipcard[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      flipcard[0].classList.add("hovered");
      setTimeout(() => {
        flipcard[0].classList.remove("hovered");
      }, 1000);
    }
    else {
      flipcard[i].classList.remove("hovered");
    }
  }
}

window.addEventListener("scroll", flip);
window.addEventListener("scroll", reveal);



function resize() {
  if ($(window).width() < 703) {
    $('#mobile-view').removeClass('multiple');
    $('#mobile-view').addClass('single');
    $('.who-can-attend').addClass('my-3');
    $('#key-features').removeClass('p-3')
  } else {
    $('#mobile-view').removeClass('single');
    $('.who-can-attend').removeClass('my-3');
    $('#mobile-view').addClass('multiple');
    $('#key-features').addClass('p-3')
  }
}
$(window).on("resize", resize);
resize();





