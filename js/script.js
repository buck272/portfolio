goUpButton = document.getElementById("button");

function myScrollFunc () {
    var y = window.scrollY;
    if (y >= 500) {
        goUpButton.className = "scrollUpButton show";
    } else {
        goUpButton.className = "scrollUpButton hide";
    }
};

window.addEventListener("scroll", myScrollFunc);