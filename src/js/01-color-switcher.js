const body = document.querySelector("body");
  const startButton = document.querySelector("[data-start]");
  const stopButton = document.querySelector("[data-stop]");
let interval=null
    startButton.addEventListener("click", startColorChange);
  stopButton.addEventListener("click", stopColorChange);
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function startColorChange() {
    startButton.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(() => {
      body.style.backgroundColor =  getRandomHexColor();
    }, 1000);
  }

  function stopColorChange() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
  }