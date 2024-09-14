import React, { useEffect, useRef } from 'react';

// You can add more icons here
const icons = [
  { label: 'Git', emoji: '🐙' },
  { label: 'VS Code', emoji: '💻' },
  { label: 'Node.js', emoji: '</>' },
  { label: 'Azure', emoji: '☁️' },
  { label: 'ReactJS', emoji: '⚛️' },
];

const DevIconsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const floatingIcons = [];
    const iconCount = 25;

    // Generate floating icons with random positions and movement speed
    const generateIcons = () => {
      for (let i = 0; i < iconCount; i++) {
        const iconIndex = Math.floor(Math.random() * icons.length);
        floatingIcons.push({
          ...icons[iconIndex],
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 50 + 30,
          speed: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawIcons = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      floatingIcons.forEach((icon) => {
        ctx.font = `${icon.size}px Arial`;
        ctx.fillStyle = '#FFF';
        ctx.fillText(icon.emoji, icon.x, icon.y);
      });
    };

    const updateIcons = () => {
      floatingIcons.forEach((icon) => {
        icon.y += icon.speed;
        if (icon.y > canvas.height) {
          icon.y = 0;
          icon.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      drawIcons();
      updateIcons();
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    generateIcons();
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none', // Allow clicks through the background
      }}
    />
  );
};

export default DevIconsBackground;
