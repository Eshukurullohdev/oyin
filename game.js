// game.js
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
let playerPos = 185; // Boshlang'ich holat
let obstaclePos = 0;
let score = 0;

// O'yinchini chap va o'ngga harakatlantirish
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && playerPos > 0) {
    playerPos -= 10;
    player.style.left = playerPos + "px";
  } else if (event.key === "ArrowRight" && playerPos < 370) {
    playerPos += 10;
    player.style.left = playerPos + "px";
  }
});

// To'siqni pastga harakatlantirish
function moveObstacle() {
  obstaclePos += 5;
  obstacle.style.top = obstaclePos + "px";

  // To'siq pastga yetib qolsa, uni yuqoriga qaytarib, hisobni oshiramiz
  if (obstaclePos > 400) {
    obstaclePos = 0;
    obstacle.style.left = Math.floor(Math.random() * 370) + "px";
    score++;
    console.log("Hisob: ", score);
  }

  // O'yinchiga tegishini tekshirish
  if (
    obstaclePos > 370 &&
    playerPos < parseInt(obstacle.style.left) + 30 &&
    playerPos + 30 > parseInt(obstacle.style.left)
  ) {
    alert("O'yin tugadi! Yakuniy hisob: " + score);
    obstaclePos = 0;
    score = 0;
  }

  requestAnimationFrame(moveObstacle);
}

// O'yinni boshlash
moveObstacle();
