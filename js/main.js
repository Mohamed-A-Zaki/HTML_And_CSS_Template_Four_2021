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
 * scroll indicator
 */

let progress_bar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function () {
  let scroll = scrollY;
  // let scroll = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  progress_bar.style.width = `${(scroll / height) * 100}%`;
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

/**
 * latest events section
 */

let final_date = new Date("02 28 2022 23:59:59").getTime();

setInterval(() => {
  let current_date = new Date().getTime();

  let deff_date = final_date - current_date;

  // get total days in fraction and get days in decimal number

  let total_days = deff_date / (1000 * 60 * 60 * 24);

  let days = Math.trunc(total_days);

  // get total hours in fraction and get hours in decimal number

  let total_hours = (total_days - days) * 24;

  let hours = Math.trunc(total_hours);

  // get total minutes in fraction and get minutes in decimal number

  let total_minutes = (total_hours - hours) * 60;

  let minutes = Math.trunc(total_minutes);

  // get total seconds in fraction and get seconds in decimal number

  let total_seconds = (total_minutes - minutes) * 60;

  let seconds = Math.trunc(total_seconds);

  // render time in dom elements

  document.querySelector(".events .num.days").innerHTML =
    days < 10 ? `0${days}` : days;

  document.querySelector(".events .num.hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;

  document.querySelector(".events .num.minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  document.querySelector(".events .num.seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
