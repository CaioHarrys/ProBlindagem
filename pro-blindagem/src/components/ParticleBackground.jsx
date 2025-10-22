import React, { useEffect, useRef } from 'react';
import '../assets/css/ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Particle configuration
    const PARTICLES = Math.max(28, Math.floor((w * h) / 80000));
    const MAX_DIST = 120;
    const particles = [];
    let lastTime = 0;
    const FPS = 30;
    const FRAME_DURATION = 1000 / FPS;
    let running = true;
    let visible = true;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function Particle() {
      this.x = rand(0, w);
      this.y = rand(0, h);
      this.r = rand(0.6, 1.8);
      this.vx = rand(-0.25, 0.25);
      this.vy = rand(-0.25, 0.25);
      this.alpha = rand(0.35, 0.85);
    }

    Particle.prototype.move = function (dt) {
      this.x += this.vx * (dt / 16);
      this.y += this.vy * (dt / 16);
      if (this.x < -10) this.x = w + 10;
      if (this.x > w + 10) this.x = -10;
      if (this.y < -10) this.y = h + 10;
      if (this.y > h + 10) this.y = -10;
    };

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.fillStyle = `rgba(156, 110, 255, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#9c6eff';
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    };

    function connect() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(156, 110, 255, ${0.09 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      particles.length = 0;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      for (let i = 0; i < PARTICLES; i++) particles.push(new Particle());
    }

    function frame(ts) {
      if (!running) return;
      requestAnimationFrame(frame);
      if (ts - lastTime < FRAME_DURATION) return;
      const dt = ts - lastTime;
      lastTime = ts;

      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.move(dt);
        p.draw();
      }
      connect();
    }

    // Visibility-based pausing
    const visObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.intersectionRatio > 0) {
            visible = true;
            running = true;
            lastTime = performance.now();
            requestAnimationFrame(frame);
          } else {
            visible = false;
            running = false;
          }
        });
      },
      { root: null, threshold: 0.01 }
    );
    visObs.observe(canvas);

    // Pause when tab is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        running = false;
      } else {
        running = true;
        lastTime = performance.now();
        requestAnimationFrame(frame);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Resize handling
    let resizeTO;
    const handleResize = () => {
      clearTimeout(resizeTO);
      resizeTO = setTimeout(() => init(), 250);
    };
    window.addEventListener('resize', handleResize);

    // Initialize
    init();
    lastTime = performance.now();
    requestAnimationFrame(frame);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      visObs.disconnect();
      running = false;
    };
  }, []);

  return <canvas ref={canvasRef} id="particles" aria-hidden="true" />;
};

export default ParticleBackground;