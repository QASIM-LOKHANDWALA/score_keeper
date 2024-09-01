let scoreDisplay = document.querySelectorAll("span");
let p1Display = scoreDisplay[0];
let p2Display = scoreDisplay[1];

let p1Score = 0;
let p2Score = 0;

let selector = document.querySelector("select");

let p1Button = document.querySelector(".btn-p1");
let p2Button = document.querySelector(".btn-p2");

let gameOver = false;

let winningScore = parseInt(selector.value);

selector.addEventListener("change", () => {
  winningScore = parseInt(selector.value);
  console.log(winningScore);
  reset();
});

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score++;
    console.log("increment");
    if (p1Score === winningScore) {
      console.log("checker");
      gameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("looser");
    }
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score++;
    console.log(p2Score === winningScore);
    if (p2Score === winningScore) {
      console.log("checker");
      gameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("looser");
    }
    p2Display.innerText = p2Score;
  }
});

function reset() {
  gameOver = false;

  p1Display.innerText = 0;
  p2Display.innerText = 0;

  p1Score = 0;
  p2Score = 0;

  p1Display.classList.remove("winner", "looser");
  p2Display.classList.remove("winner", "looser");
}

let resetButton = document.querySelector(".btn-reset");

resetButton.addEventListener("click", reset);
