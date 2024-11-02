window.onscroll = function () {
  const navbar = document.getElementById("nav-bar");
  const scrollY = window.scrollY;

  if (scrollY > 970) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

fetch("assets/img/svg/M-logo.svg")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("svg-container").innerHTML = data;

    const letters = document.querySelectorAll("#svg-container path");

    letters.forEach((letter, i) => {
      letter.classList.add("fade");

      letter.style.animationDelay = `${Math.random() * 1}s`;
    });
  })
  .catch((error) => console.error("Errore nel caricamento dell'SVG:", error));
