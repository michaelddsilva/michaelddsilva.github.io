window.onscroll = function() {progressBar()};


window.onload = function onloadfunction() {
    copyrightYear();
    typeMyName();
    var today = new Date();
    var h = today.getHours();
    if(h>18 || h <7){
      var check = document.getElementById("toggleSwitch");
      check.checked = true;
      toggleCSS();
    }
}


function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function copyrightYear() {
    var year = new Date().getFullYear();

    document.querySelector("footer p").innerHTML = "Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";

}

function navBar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var i = 0;
var name = "Hi, I'm Michael D'Silva";
var speed1 = 100;

function typeMyName() {
  if (i < name.length) {
    document.getElementById("hello").innerHTML += name.charAt(i);
    i++;
    
    setTimeout(typeMyName, speed1);
  }
}

function toggleCSS() {
  var check = document.getElementById("toggleSwitch");
  if (check.checked) {
    document.documentElement.setAttribute('site-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('site-theme', 'light');
  }    
}
