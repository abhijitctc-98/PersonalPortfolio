import React, { useEffect, useRef } from 'react';

const AchievementsGUIBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const icons = [];
    const iconCount = 40;

    const generateIcons = () => {
      for (let i = 0; i < iconCount; i++) {
        icons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 12,
          speed: Math.random() * 2 + 1,
        });
      }
    };

    const drawIcons = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      icons.forEach((icon) => {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(icon.x, icon.y, icon.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = `${icon.size * 0.5}px Arial`;
        ctx.fillText('🏆', icon.x - icon.size * 0.5, icon.y + icon.size * 0.5);
      });
    };

    const updateIcons = () => {
      icons.forEach((icon) => {
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
        pointerEvents: 'none',
      }}
    />
  );
};

export default AchievementsGUIBackground;
