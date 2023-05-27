// 
// const icons = document.getElementsByClassName("fa-brand")
// for (let i = 0; i < icons.length; i++) {
//   icons[i].addEventListener("mouseover", (event) => {
//     console.log(event);
//   })
// }

function minWidth() {
  if (window.innerWidth <= 992) {
    const labels = document.getElementsByClassName("btn-label")
    for (let i = 0; i < labels.length; i++) {
      labels[i].setAttribute("aria-label", '')
    }
  }
  const sandwich = document.getElementById("sandwich")
  const navbarItems = document.getElementsByClassName("navbar-item")
  const navbar = document.getElementsByClassName("navbar")[0]
  let active = false
  sandwich.addEventListener("click", () => {
    if (!active) {
      for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].style.display = "inline-flex"
        navbar.style.backdropFilter = "blur(4px)"
      }
      active = true
    } else {
      for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].style.display = "none"
        navbar.style.backdropFilter = ""
      }
      active = false
    }
  })
}
minWidth()

let counter;
function rgbOn() {
  let hueValue = 0
  clearInterval(counter)
  counter = setInterval(() => {
    document.body.style.setProperty('--main-color', `hsl(${hueValue},100%,50%)`)
    document.body.style.setProperty('--second-color', `hsl(${hueValue},100%,50%)`)
    hueValue++
    if (hueValue == 360) hueValue = 0
  }, 10);
}


var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;
var keyHandler = function (event) {
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }
  current++;
  if (pattern.length === current) {
    current = 0;
    rgbOn()
  }
};
document.addEventListener('keydown', keyHandler, false);
// https://gomakethings.com/how-to-create-a-konami-code-easter-egg-with-vanilla-js/
