function openNav() {
  if(window.screen.width > 450){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("mySidenav").style.width = "100%";
    document.querySelector("body").style.overflow = "hidden";
    clickedNavLinks();
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector("body").style.overflow = "visible";
}

function clickedNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link');

  for (var links = 0 ; links < navLinks.length; links++) {
    navLinks[links].addEventListener('click', () => closeNav());
  }
}

// Progress Bar Scroll
window.onscroll = function() {ProgressBar()};

function ProgressBar() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}