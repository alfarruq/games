let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let number = document.getElementById("num");
let gameOver = document.getElementById("gameOver");

let num = 0;

setInterval(() => {
  num++;
  number.innerText = num;
}, 400);

document.addEventListener("keydown", () => {
  dino.classList.add("sakra");
  setTimeout(() => {
    dino.classList.remove("sakra");
  }, 500);
});

setInterval(() => {
  let dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt( getComputedStyle(cactus).getPropertyValue("left")) ;
if (dinoTop >=100 && cactusLeft <= 22 && cactusLeft>=0 ) {
    gameOver.innerText = 'Game Over'
}
}, 50);
