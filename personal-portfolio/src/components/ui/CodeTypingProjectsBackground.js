import React, { useEffect, useRef } from 'react';

const CodeTypingProjectsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const codeLines = [];
    const lineCount = 50;

    const generateCodeLines = () => {
      for (let i = 0; i < lineCount; i++) {
        codeLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 30 + 10,
          speed: Math.random() * 3 + 1,
        });
      }
    };

    const drawCodeLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '16px monospace';
      ctx.fillStyle = '#00FF00';
      codeLines.forEach((line) => {
        ctx.fillText('Project { ... }', line.x, line.y);
        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = 0;
          line.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      drawCodeLines();
      requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    generateCodeLines();
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

export default CodeTypingProjectsBackground;
