import { useEffect, useRef, useState, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.parentElement?.clientWidth || 800;
    const h = canvas.parentElement?.clientHeight || 600;
    canvas.width = w;
    canvas.height = h;

    nodesRef.current = Array.from({ length: 35 }, () => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x, y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
      };
    });
    setReady(true);
  }, []);

  useEffect(() => {
    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [init]);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      nodesRef.current.forEach((node) => {
        const dx = mx - node.x;
        const dy = my - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200 && dist > 0) {
          node.x += dx * 0.008;
          node.y += dy * 0.008;
        }

        node.x += node.vx;
        node.y += node.vy;

        node.x += (node.baseX - node.x) * 0.003;
        node.y += (node.baseY - node.y) * 0.003;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const a = nodesRef.current[i];
          const b = nodesRef.current[j];
          const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(108, 12%, 50%, ${0.15 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(108, 12%, 55%, 0.6)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(108, 12%, 55%, 0.1)";
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, [ready]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default NetworkVisualization;
