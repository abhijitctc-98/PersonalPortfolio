import React, { useEffect, useRef } from 'react';

const ChatsContactsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const chatBubbles = [];
    const bubbleCount = 30;

    const generateBubbles = () => {
      for (let i = 0; i < bubbleCount; i++) {
        chatBubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 50 + 30,
          speed: Math.random() * 2 + 1,
        });
      }
    };

    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      chatBubbles.forEach((bubble) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = `${bubble.size * 0.5}px Arial`;
        ctx.fillText('💬', bubble.x - bubble.size * 0.5, bubble.y + bubble.size * 0.25);
      });
    };

    const updateBubbles = () => {
      chatBubbles.forEach((bubble) => {
        bubble.y += bubble.speed;
        if (bubble.y > canvas.height) {
          bubble.y = 0;
          bubble.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      drawBubbles();
      updateBubbles();
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    generateBubbles();
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

export default ChatsContactsBackground;
