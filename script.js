var imgSlider = document.querySelector ("#imgSlider");

var imgPosition = 0;

function goLeft() {
  if (imgPosition < 2) {
    imgPosition++;
  }
  var imgPositionPx = imgPosition * 500;
  imgSlider.style.transform = "translateX(-"+ imgPositionPx + "px)";
}

function goRight() {
  if (imgPosition > 0) {
    imgPosition--;
  }
  var imgPositionPx = imgPosition * 500;
  imgSlider.style.transform = "translateX(-" + imgPositionPx + "px)";
}