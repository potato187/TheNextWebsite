const getElement = (element) => document.querySelector(element);

const mobileMenu = getElement("#mobile-menu");
const navBar = getElement("nav.navBar");
const toTop = getElement("#back-to-top");

mobileMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

toTop.addEventListener("click", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 300);
});
