window.onload = function onloadfunction() {
    copyrightYear();
    typeWriter();
}

function copyrightYear() {
    var year = new Date().getFullYear();

    document.querySelector("footer p").innerHTML = "Almost Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";

}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var i = 0;
var txt = "Hi, i'm Michael D'Silva";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
