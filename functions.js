
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}


var numerberOfButtons = document.querySelectorAll(".sound").length;
for(var i = 0; i<numerberOfButtons; i++){
  document.querySelectorAll(".sound")[i].addEventListener("click", function(){
    var butttonInnerHTML = this.innerHTML;
    switch (butttonInnerHTML) {
      case "1":
      var mp1 = new Audio('songs/Dequine-Движения.mp3');
      mp1.play();
      break;
      case "2":
      var mp2 = new Audio('songs/Dequine-Сильней.mp3');
      mp2.play();
      break;
      case "3":
      var mp3 = new Audio('songs/Dequine-Первая любовь.mp3');
      mp3.play();
      break;
      case "4":
      var mp4 = new Audio('songs/Dose, Dequine-Ветер.mp3');
      mp4.play();
      break;

    default: console.log(butttonInnerHTML);
   }
 });
};
