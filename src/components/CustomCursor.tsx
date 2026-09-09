import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports hover/touch
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      if (isTouch) {
        setIsTouchDevice(true);
        return;
      }
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('[data-magnetic="true"]') ||
          target.classList.contains('cursor-pointer');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth lerp loop for outer trailing ring
    const renderLoop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Glowing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform ${
          isHovered
            ? 'w-12 h-12 border-[#4edea3] bg-[#00a572]/15 shadow-[0_0_20px_rgba(78,222,163,0.35)] scale-110'
            : isClicking
            ? 'w-7 h-7 border-[#93c5fd] bg-blue-500/20 scale-90'
            : 'w-8 h-8 border-cyan-400/60 bg-cyan-400/5'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Inner Pinpoint Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform ${
          isHovered
            ? 'w-2 h-2 bg-[#4edea3] shadow-[0_0_8px_#4edea3]'
            : isClicking
            ? 'w-1.5 h-1.5 bg-white'
            : 'w-1.5 h-1.5 bg-cyan-300'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
