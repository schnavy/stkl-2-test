let state = 0;
let main = document.querySelector("main");
main.addEventListener("scroll", (e) => {
  console.log("scroll listener called: " + state);
  if (state == 2) return;
  if (main.scrollTop > 10) {
    setFormenState(1);
  } else {
    setFormenState(0);
  }

  if (main.scrollTop + main.clientHeight >= main.scrollHeight - 200) {
    setFormenState(0);
  }
});

let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  let newState = 2;
  if (state == 2) {
    if (main.scrollTop > 10) {
      newState = 1;
    } else {
      newState = 0;
    }
  }
  setFormenState(newState);
  let content = document.querySelector(".content");
  state == 2 ? content.classList.add("hide") : content.classList.remove("hide");
});

function setFormenState(newState) {
  console.log("state in f: " + state);
  if (newState == state) return;
  state = newState;
  let formenWrapper = document.querySelector(".formen");
  let main = document.querySelector("main");
  formenWrapper.classList.add("transition");
  setTimeout(() => {
    main.setAttribute("data-state", state);
    formenWrapper.classList.remove("transition");
  }, 200);
}

function getFormenState() {
  let main = document.querySelector("main");
  return main.getAttribute("data-state");
}
