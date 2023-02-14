function Randomize() {
  var images = new Array("/images/tema/header/IMG2.jpg", "/images/tema/header/IMG.jpg");
  var imageNum = Math.floor(Math.random() * images.length);
  document.getElementById("background").style.backgroundImage = "url('" + images[imageNum] + "')";
}
window.onload = Randomize;