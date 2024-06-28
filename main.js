let state = 0;
let main = document.querySelector("main");
main.addEventListener("scroll", (e) => {
  if (state == 2) return;
  if (main.scrollTop > 5) {
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
    if (main.scrollTop > 5) {
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
  if (newState == state) return;
  state = newState;
  let formenWrapper = document.querySelector(".formen");
  let main = document.querySelector("main");
  formenWrapper.classList.add("transition");
  setTimeout(() => {
    main.setAttribute("data-state", state);
    formenWrapper.classList.remove("transition");
  }, 5);
}

function getFormenState() {
  let main = document.querySelector("main");
  return main.getAttribute("data-state");
}

const glyphResizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    requestAnimationFrame(() => setGlyphRatio(entry.target));
  }
});

let resizeTimeout;
function setGlyphRatio(glyphInput) {
  let aspectRatio =
    glyphInput.getBoundingClientRect().width /
    glyphInput.getBoundingClientRect().height;

  let weight = Math.floor((900 * aspectRatio) / 10);
  glyphInput.style.fontVariationSettings = "'wght' " + weight;
}

let glyph = document.querySelector(".glyph");
glyphResizeObserver.observe(glyph);

initializeGlyph(glyph);

function initializeGlyph(glyph) {
  glyph.style.display = "block";
  setTimeout(() => {
    glyph.style.transition = "font-variation-settings 500ms ease-out";
  }, 100);
}
