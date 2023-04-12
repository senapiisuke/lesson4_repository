
//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    }
  }
});

//アコーディオンにクラス付与する
$(".accordion-button").on("click", function(){
  $(".accordion-button").addClass("collapsed");
});

//フェードイン
$(window).scroll(function (){
  $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
          }
      });
  });
