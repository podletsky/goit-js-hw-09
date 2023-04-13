
const body = document.querySelector('body')
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 btnStart.addEventListener("click", startColorChange);
  btnStop.addEventListener("click", stopColorChange);

function startColorChange() {
 intervalId = setInterval(() => {
   body.style.backgroundColor = getRandomHexColor()
    }, 1000);
  }
function stopColorChange() {
    clearInterval(intervalId)
}
















