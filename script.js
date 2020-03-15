// LINKS IN A NEW TAB

const links = document.querySelectorAll("a")

links.forEach(a => a.setAttribute("target", "_blank"))


// PARALLAX SCROLL

const parallax = document.querySelectorAll(".parallax");

const parallaxScroll = () => {
  let offset = window.pageYOffset;
  parallax.forEach((prllx) => {
    prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
  })
}

window.addEventListener("scroll", parallaxScroll)