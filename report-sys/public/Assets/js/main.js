/* Get the documentElement (<html>) to display the page in fullscreen */




var elem = document.getElementById("FullScreenContent");

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}



function zoomin() {
    var myImg = document.getElementById("DashContent");
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
        myImg.style.width = (currWidth + 100) + "px";
    }
}

function zoomout() {
    var myImg = document.getElementById("DashContent");
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
        myImg.style.width = (currWidth - 100) + "px";
    }
}



// theme logo check 
$(document).ready(function () {
    'use strict';
    //var themeName = 'theme';
    localStorage.getItem('theme');
    if (localStorage.getItem('theme') === 'theme-dark') {
        $("#imag").attr("src", "img/logo-intro.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-dark.png");

    } else {

        $("#imag").attr("src", "img/logo.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-light.png");
    }

});

// function to set a given theme/color-scheme
function setTheme(themeName) {
    'use strict';
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    'use strict';
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');

        $("#imag").attr("src", "img/logo-intro.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-dark.png");

    } else {
        setTheme('theme-light');
        $("#imag").attr("src", "img/logo.png");
        $("#CpanelImag").attr("src", "img/logo-cpanel-light.png");
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    'use strict';
    if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();





