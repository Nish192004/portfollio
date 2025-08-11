const canvas = document.getElementById('dnaCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let angle = 0;

function drawDNA() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const amplitude = 60;
  const frequency = 0.04;
  const strandSpacing = 200;
  const totalStrands = Math.floor(canvas.width / strandSpacing);
  const step = 12;

  for (let strand = 0; strand < totalStrands; strand++) {
    const strandX = (strand + 0.5) * strandSpacing;

    for (let y = 0; y < canvas.height; y += step) {
      for (let i = 0; i < 2; i++) {
        const phase = (Math.PI * 2 * i) / 2;
        const x = strandX + Math.sin(frequency * y + angle + phase) * amplitude;

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00eaff';
        ctx.shadowColor = '#00eaff';
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      const x1 = strandX + Math.sin(frequency * y + angle) * amplitude;
      const x2 = strandX + Math.sin(frequency * y + angle + Math.PI) * amplitude;

      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  angle += 0.02;
  requestAnimationFrame(drawDNA);
}

drawDNA();
