//When change window screen size view, show burgerNav
function openNav() {
  document.getElementById("burgerNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("burgerNav").style.height = "0%";
}



//로딩중 화면표시
function loadingProcess() {
  openLoading('./img/hj_loading.gif');

  //타이머를 이용해 로딩창 종료
  setTimeout(closeLoading, 3000);
}

//로딩창 키는 함수
function openLoading(gif) {

  //화면 높이와 너비를 구함
  var maskHeight = $(document).height();
  var maskWidth = window.document.body.clientWidth;

  //출력할 마스크를 설정함
  var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
  
  //로딩 이미지 주소 및 옵션
  var loadingImg = '';
  loadingImg += "<div id='loadingImg' style='position:absolute; left:37%; top:30%; display:none; z-index:10000;'>";
  loadingImg += "<img src='./img/hj_loading.gif'>";
  loadingImg += "</div>";

  //레이어 추가
  $('body')
      .append(mask)
      .append(loadingImg);

  //마스크의 높이와 너비로 전체 화면을 채움
  $('#mask').css({
      'width' : maskWidth,
      'height': maskHeight,
      // 'opacity' : '0.9'
      'background' : '#ff9933',
  });

   //마스크 표시
  $('#mask').show();

  //로딩 이미지 표시
  $('#loadingImg').show();
}

  //로딩창 끄는 함수
  function closeLoading() {
  $('#mask, #loadingImg').hide();
  $('#mask, #loadingImg').empty();
}



//textSection 화면 효과
$(function() {
  $("#contextWrap").on("click", function() { 
    $(".textSection").fadeOut(1000).delay(1000).fadeIn(2000);
          // a가 textSection 요소를 1초에 걸쳐 사라지게 하고
          // 1초의 지연시간 뒤에 다시 2초 걸쳐 나타남
  });
})



//네비게이션 메뉴 클릭시 해당 섹션 이동
$(function(){
    $("a").on("click", function(){
      var divName = $(this).attr("id"),
          topPosition = $("." + divName).offset().top;
      $('html, body').animate({
          scrollTop: topPosition - 55
      }, 700);
      return false; //리턴펄스로 스크롤이 최상위로 갔다가 돌아오는 현상 없어짐
    });
});



// slick slider
$(function() {
  $('.sliderWrap').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false, //양방향 무한 모션
    arrows: true,
    dots: true,
    dotsClass: "slick-dots", //아래 나오는 페이지네이션 css class 지정
    vertical: false,
    prevArrow: "<button type= 'button' class='slick-prev'>prev</button>",
    nextArrow: "<button type= 'button' class='slick-next'></button>",
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