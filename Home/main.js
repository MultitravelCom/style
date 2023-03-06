// Resaltar solpa Fligh en la home.
window.addEventListener("load", function() {
  var nav = document.querySelector("#main-menu ul.nav");
  var firstLi = nav.querySelector("li:nth-child(2)");
  firstLi.classList.add("active");
});
