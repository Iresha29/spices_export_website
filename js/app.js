$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: [
      "Discover the authentic flavors of Sri Lanka with our premium spices.",
      "At Ceylon Spices, we pride ourselves on sourcing the finest quality spices directly from the heart of Sri Lanka.",
      "Explore our diverse range of products and bring the essence of Ceylon to your culinary creations.",
      "Experience the rich heritage and vibrant taste of Sri Lankan spices today!",
    ],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  // Slideshow
  $(document).ready(function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    setInterval(function () {
      plusSlides(1);
    }, 10000);

    window.plusSlides = function (n) {
      showSlides((slideIndex += n));
    };

    window.currentSlide = function (n) {
      showSlides((slideIndex = n));
    };

    function showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  });

  // var waypoint=new Waypoint({
  //     element:document.getElementById('basic-waypoint'),
  //     handler:function(){
  //         notify('Basic waypoint triggered')
  //     }
  // })
});
