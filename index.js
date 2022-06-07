//When change window screen size view, show burgerNav
function openNav() {
  document.getElementById("burgerNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("burgerNav").style.height = "0%";
}

//Screen change
function slidePage2(direction) {

  if(index == 0) {
    if(direction == 'left') {

      index = 2;

      $("#content-two").hide(0);
      $("#content-one").hide(0);
      $("content-three").fadeln(0);

    } else if (direction == 'right') {

      index = 1;
      
      $("#content-one").hide(0);
      $("#content-three").hide(0);
      $("#content-two").fadeln(0);

    }
  }
}

function slidePage2(direction) {

  if(index == 1) {
    if(direction == 'left') {

      index = 2;

      $("#content-two").hide(0);
      $("#content-one").hide(0);
      $("content-three").fadeln(0);

    } else if (direction == 'right') {

      index = 1;
      
      $("#content-one").hide(0);
      $("#content-three").hide(0);
      $("#content-two").fadeln(0);

    }
  }
}

function slidePage2(direction) {

  if(index == 2) {
    if(direction == 'left') {

      index = 2;

      $("#content-two").hide(0);
      $("#content-one").hide(0);
      $("content-three").fadeln(0);

    } else if (direction == 'right') {

      index = 1;
      
      $("#content-one").hide(0);
      $("#content-three").hide(0);
      $("#content-two").fadeln(0);

    }
  }
}