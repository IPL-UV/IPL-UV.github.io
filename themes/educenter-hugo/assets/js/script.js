(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // Sticky Menu
  $(window).scroll(function () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      $('.navigation').removeClass('nav-bg');
      $('.navigation').css('margin-top','-'+0+'px');
    }
  });

  

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    arrows: true,
    fade: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
    dots: true
  });
  $('.hero-slider').slickAnimation();

  // venobox popup
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    var filterizd;
    if (containerEl) {
      filterizd = $('.filtr-container').filterizr({});
    }
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Animation
  $(document).ready(function () {
    $('.has-animation').each(function (index) {
      $(this).delay($(this).data('delay')).queue(function () {
        $(this).addClass('animate-in');
      });
    });
  });


})(jQuery);


// Scroll form nav
document.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  if (query) {
      document.getElementById("search-query").textContent = query;

      fetch("/index.json")
          .then((response) => response.json())
          .then((data) => {
              const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              const results = data.filter((page) => {
                  const normalizedTitle = page.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  const normalizedContent = page.content.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  const normalizedSummary = page.summary.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                  return (
                      normalizedTitle.includes(normalizedQuery) ||
                      normalizedContent.includes(normalizedQuery) ||
                      normalizedSummary.includes(normalizedQuery)
                  );
              });

              const resultsContainer = document.getElementById("search-results");

              if (results.length > 0) {
                  results.forEach((result) => {
                      const item = document.createElement("div");
                      item.innerHTML = `
                          <a href="${result.permalink}" style="font-weight: bold;">${result.title}</a>
                          <p>${result.summary.substring(0, 150)}...</p>
                      `;
                      resultsContainer.appendChild(item);
                  });
              } else {
                  resultsContainer.textContent = "No results found.";
              }
          })
          .catch((error) => {
              console.error("Error fetching search results:", error);
              document.getElementById("search-results").textContent = "An error occurred while fetching results.";
          });
  } else {
      document.getElementById("search-results").textContent = "No search query provided.";
  }
});