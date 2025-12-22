"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  // Gunakan ref, jangan pakai useState
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // Easing values
      const circleEasing = 0.08;
      const dotEasing = 0.12;
      const maxRadius = 11;

      // Update circle position (smooth follow)
      circle.current.x += (mouse.current.x - circle.current.x) * circleEasing;
      circle.current.y += (mouse.current.y - circle.current.y) * circleEasing;

      // Update dot (faster but still smooth)
      dot.current.x += (mouse.current.x - dot.current.x) * dotEasing;
      dot.current.y += (mouse.current.y - dot.current.y) * dotEasing;

      // Constrain dot within a radius from circle
      const dx = dot.current.x - circle.current.x;
      const dy = dot.current.y - circle.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > maxRadius) {
        const angle = Math.atan2(dy, dx);
        const targetX = circle.current.x + Math.cos(angle) * maxRadius;
        const targetY = circle.current.y + Math.sin(angle) * maxRadius;

        dot.current.x += (targetX - dot.current.x) * 0.3;
        dot.current.y += (targetY - dot.current.y) * 0.3;
      }

      // Apply transform (translate3d helps GPU acceleration)
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${
          circle.current.x - 16
        }px, ${circle.current.y - 16}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 4}px, ${
          dot.current.y - 4
        }px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listener dengan passive true → Safari lebih ringan
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block">
      <div
        ref={circleRef}
        className="absolute h-8 w-8 rounded-full border-2 border-[#1F2937] opacity-60 will-change-transform"
      />
      <div
        ref={dotRef}
        className="absolute h-2 w-2 rounded-full bg-[#1F2937] will-change-transform"
      />
    </div>
  );
};

export default CustomCursor;
