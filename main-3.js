let state = 0;
let main = document.querySelector("main");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  let newState = 2;
  if (state == 2) {
    newState = 0;
  }
  setFormenState(newState);
  let content = document.querySelector(".content");
  state == 2 ? content.classList.add("hide") : content.classList.remove("hide");
});

function setFormenState(newState) {
  console.log("state in f: " + state);
  if (newState == state) return;
  state = newState;
  let formenWarppen = document.querySelector(".formen");
  formenWarppen.classList.add("transition");
  setTimeout(() => {
    formenWarppen.setAttribute("data-state", state);
    formenWarppen.classList.remove("transition");
  }, 200);
}

function getFormenState() {
  let formenWarppen = document.querySelector(".formen");
  return formenWarppen.getAttribute("data-state");
}
