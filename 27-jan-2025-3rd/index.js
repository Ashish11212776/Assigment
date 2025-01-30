const game = {
  box1: { x: 0, y: 0, h: 50, w: 50 },  // Box 1 position and size
  box2: { x: 100, y: 100, h: 50, w: 50 },  // Box 2 position and size
};
const keyz = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
};

document.addEventListener("keydown", (event) => {
  if (keyz.hasOwnProperty(event.key)) {
    keyz[event.key] = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (keyz.hasOwnProperty(event.key)) {
    keyz[event.key] = false;
  }
});

function mover() {
  if (keyz.ArrowUp) game.box1.y -= 5;    // Move box1 up
  if (keyz.ArrowDown) game.box1.y += 5;  // Move box1 down
  if (keyz.ArrowLeft) game.box1.x -= 5;  // Move box1 left
  if (keyz.ArrowRight) game.box1.x += 5; // Move box1 right

  if (keyz.w) game.box2.y -= 5;          // Move box2 up
  if (keyz.s) game.box2.y += 5;          // Move box2 down
  if (keyz.a) game.box2.x -= 5;          // Move box2 left
  if (keyz.d) game.box2.x += 5;          // Move box2 right
}

function checkBoundaries(box) {
  const container = document.getElementById('parentElement');
  const containerRect = container.getBoundingClientRect();
  const boxRect = document.getElementById(box).getBoundingClientRect();

  if (boxRect.top < containerRect.top) return false;
  if (boxRect.left < containerRect.left) return false;
  if (boxRect.bottom > containerRect.bottom) return false;
  if (boxRect.right > containerRect.right) return false;
  return true;
}

function updateBoxPosition() {
  const box1 = document.getElementById('box1');
  box1.style.left = game.box1.x + "px";
  box1.style.top = game.box1.y + "px";

  const box2 = document.getElementById('box2');
  box2.style.left = game.box2.x + "px";
  box2.style.top = game.box2.y + "px";
}
function updateCoordinates() {
  document.getElementById('coordinatesBox1').innerHTML = `Box1 - X: ${game.box1.x}, Y: ${game.box1.y}, H: ${game.box1.h}, W: ${game.box1.w}`;
  document.getElementById('coordinatesBox2').innerHTML = `Box2 - X: ${game.box2.x}, Y: ${game.box2.y}, H: ${game.box2.h}, W: ${game.box2.w}`;
}

