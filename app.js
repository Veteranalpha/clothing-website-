const Bar = document.querySelector(".bar");
const Navbar = document.querySelector(".Navbar");

Bar.addEventListener("click", function () {
  Navbar.classList.toggle("activeNavbar");
});
