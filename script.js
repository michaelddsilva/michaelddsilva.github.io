window.onload = function onloadfunction() {
    copyrightYear();
}

function copyrightYear() {
    var year = new Date().getFullYear();

    document.querySelector("footer p").innerHTML = "Almost Copyright <i class='far fa-copyright'></i> " + year + " Michael D'Silva";

}