window.onscroll = function() {progressBar()};


window.onload = function onloadfunction() {
    copyrightYear();
    typeMyName();
}


function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function copyrightYear() {
    var year = new Date().getFullYear();

    document.querySelector("footer p").innerHTML = "Almost Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";

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

function swapCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
