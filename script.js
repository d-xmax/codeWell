"use";
const scrollers =
  document.querySelectorAll(".scroller");

if (
  !window.matchMedia(
    "(prefers-reduce-motion: reduce)"
  ).matches
) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    // console.log(scroller);
    const scrollInner = document.querySelector(
      ".scroller__inner"
    );
    const scrollContent = Array.from(
      scrollInner.children
    );
    console.log(scrollContent);

    scrollContent.forEach((item) => {
      const duplicate = item.cloneNode(true);
      duplicate.setAttribute("aria-hidden", true);
      scrollInner.appendChild(duplicate);
    });
  });
}

// For hamburger
const hamburger =
  document.querySelector(".hamburger");
const navLinks =
  document.querySelector(".nav-links");
const section =
  document.querySelectorAll("section");
const intro = document.querySelector(".intro");
document.querySelector("footer");
const icon = document.querySelector(".hamburger i")
console.log(icon);

const clickHam = function (e) {
  e.preventDefault();

  console.log(intro);
  intro.classList.toggle("blur");
  section.forEach((section) => {
    section.classList.toggle("blur");
  });
  navLinks.classList.toggle("active");
  icon.classList.toggle("opacity")
  
 
  
};

hamburger.addEventListener("click", clickHam);

// for cookie
const body = document.querySelector("body");
const cookie = document.createElement("div");
cookie.classList.add("oven");


cookie.innerHTML = ` 
        <div>
        <p class="font-body cook-text">We use cookies for improve our service </p>
        </div>
        <div class="btn font-body cook-btn">
          <a href="#">Cookies Accept</a>
        </div>`;
console.log(cookie);


body.before(cookie);
const button = document.querySelector('.cook-btn')


button.addEventListener("click", function (e) {
  cookie.classList.add('close')
});
