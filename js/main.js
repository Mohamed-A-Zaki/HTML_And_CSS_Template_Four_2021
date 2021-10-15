let links = document.querySelectorAll("nav .container > ul > li a");

let other_links = document.querySelector("nav .container > ul > li:last-child");

let mega_menu = document.querySelector("nav .mega-menu ");

links.forEach((element) => {
  element.onclick = function () {
    links.forEach((element) => {
      element.classList.remove("active");
    });
    mega_menu.classList.remove("show");
    this.classList.toggle("active");
  };
});

other_links.onclick = function () {
  mega_menu.classList.toggle("show");
};
