
  $(function(){
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow1"></button>',
    nextArrow: '<button class="slide-arrow next-arrow1"></button>',

    responsive: [
      {
        breakpoint: 1024, // 768~1023px以下のサイズに適用
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function(){
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

  });
});


$(function(){
  $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);


    // if ($(this).hasClass('active')) {
    //       document.body.style.overflow = "static";
    //   } else {
    //       document.body.style.position = "fixed";
    //   }


  });
  
  });



  $(function(){
    var state = false;
    var pos;
    $(".hamburger").click(function(){
    if (state == false) {
    pos = $(window).scrollTop();
    $("body").addClass("fixed").css({"top": -pos});
    state = true;
    } else {
    $("body").removeClass("fixed").css({"top": 0});
    window.scrollTo(0, pos);
    state = false;
    }
    });
    });