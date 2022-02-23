/**
 * scroll-to-top
 */
let scroll_to_top = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  window.scrollY >= 1000
    ? scroll_to_top.classList.add("show")
    : scroll_to_top.classList.remove("show");
});

scroll_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/**
 * skills section
 */
let skills_section = document.querySelector(".our-skills");

let per_val = document.querySelectorAll(".our-skills .skill h3 span");

let skill_span = document.querySelectorAll(".our-skills .skill .progress span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skills_section.offsetTop - 100) {
    per_val.forEach(
      (element, index) => (skill_span[index].style.width = element.innerHTML)
    );
  }
});

/**
 * stat section
 */
let stat_section = document.querySelector(".stat");

let nums = document.querySelectorAll(".stat .box .num");

let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= stat_section.offsetTop - 100) {
    if (!started) {
      increase_count();
      started = true;
    }
  }
});

function increase_count() {
  nums.forEach((element) => {
    let number = element.getAttribute("number");
    let count = setInterval(() => {
      element.innerHTML++;
      if (element.innerHTML == number) {
        clearInterval(count);
      }
    }, 2000 / number);
  });
}
