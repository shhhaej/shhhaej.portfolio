//When change window screen size view, show burgerNav
function openNav() {
  document.getElementById("burgerNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("burgerNav").style.height = "0%";
}


// slick 
$(function() {
  $('.sliderWrap').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false, //양방향 무한 모션
    arrows: true,
    dots: true,
    dotsClass: "slick-dots", //아래 나오는 페이지네이션 css class 지정
    vertical: false,
    // prevArrow: "<button type= 'button' class='slick-prev'>prev</button>",
    // nextArrow: "<button type= 'button' class='slick-next'>next</button>",
    prevArrow: '<span class="prev" href="#"><i class="fa-solid fa-angle-left" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next" href="#"><i class="fa-solid fa-angle-right" aria-hidden="true"></i></span>',
    draggable: true, 
    responsive: [ //반응형 웹 구현 옵션
      {
        breakpoint: 768, //768px 이하
        settings: { //위에 옵션이 디폴트, 여기에 추가하면 그걸로 변경
          slidesToShow: 3, //슬라이드 3개 보이고
          arrows: false, //좌우 버튼 보이지 않기
        }
      },
      {
        breakpoint: 600, //600px 이하
        settings: {
          slidesToShow: 1, //슬라이드 1개 보이고
          arrows: true, //좌우 버튼 보이기
        }
      }
    ]
  });
});