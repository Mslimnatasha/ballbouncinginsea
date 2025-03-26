// Get the canvas and context
const canvas = document.getElementById('seaCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 30,
  speedX: 4,
  speedY: 3,
  color: 'yellow'
};

// Function to update the canvas and ball
function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();

  // Update the ball position
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Collision detection with canvas edges (bounce effect)
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX; // Reverse direction
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY; // Reverse direction
  }

  // Request a new animation frame
  requestAnimationFrame(update);
}

// Start the animation
update();
