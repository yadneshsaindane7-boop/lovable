// Background music play on button click
let musicStarted = false;
const music = document.getElementById('bgmusic');

document.getElementById('playMusic').addEventListener('click', function () {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
});

document.getElementById('openMessage').addEventListener('click', function () {
  window.open('message.html', '_blank', 'width=800,height=600');
});

// Animated hearts
function showHearts() {
  const canvas = document.getElementById('hearts');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let hearts = [];

  function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 24 + 14;
    this.speed = Math.random() * 2.9 + 1.9;
    this.opacity = Math.random() * 0.9 + 0.1;
    this.color = 'rgba(0, 255, 255,' + this.opacity + ')';
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
      ctx.beginPath();
      ctx.fillStyle = h.color;
      ctx.moveTo(h.x, h.y);
      ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2, h.x - h.size, h.y - h.size * 1.5, h.x, h.y - h.size * 2);
      ctx.bezierCurveTo(h.x + h.size, h.y - h.size * 1.5, h.x + h.size / 2, h.y - h.size / 2, h.x, h.y);
      ctx.fill();
      h.y -= h.speed;
      if (h.y < -22) hearts.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }

  setInterval(() => {
    hearts.push(new Heart());
  }, 115);
  animate();
}

// start hearts animation at page load
window.onload = () => {
  showHearts();
};
