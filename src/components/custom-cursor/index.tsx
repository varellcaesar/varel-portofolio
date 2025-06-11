"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const circle = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dot = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update position of mouse
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      // Cicrle follow mouse with trailing effect more smooth
      const circleEasing = 0.08; // Lebih lambat untuk smoothness
      circle.current.x += (mouse.x - circle.current.x) * circleEasing;
      circle.current.y += (mouse.y - circle.current.y) * circleEasing;

      // Dot following mouse with trailing effect
      const dotEasing = 0.12; // Sedikit lebih cepat dari circle
      const targetDotX = mouse.x + (mouse.x - dot.current.x) * dotEasing;
      const targetDotY = mouse.y + (mouse.y - dot.current.y) * dotEasing;

      // Smooth interpolation dot
      dot.current.x += (targetDotX - dot.current.x) * dotEasing;
      dot.current.y += (targetDotY - dot.current.y) * dotEasing;

      // Make sure the dot not overide the circle
      const deltaX = dot.current.x - circle.current.x;
      const deltaY = dot.current.y - circle.current.y;
      const distanceFromCircleCenter = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      );
      const maxRadius = 11;

      if (distanceFromCircleCenter > maxRadius) {
        const angle = Math.atan2(deltaY, deltaX);

        const constraintEasing = 0.3;
        const targetX = circle.current.x + Math.cos(angle) * maxRadius;
        const targetY = circle.current.y + Math.sin(angle) * maxRadius;

        dot.current.x += (targetX - dot.current.x) * constraintEasing;
        dot.current.y += (targetY - dot.current.y) * constraintEasing;
      }

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
    document.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouse]);

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
