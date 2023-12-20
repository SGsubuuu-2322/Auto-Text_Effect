const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
let idx = 1;
const text = "We love programming!....";

const speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}
