import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // max movement in pixels (e.g. 12)
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  asChild?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 14,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const moveX = (deltaX / (width / 2)) * strength;
    const moveY = (deltaY / (height / 2)) * strength;

    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-magnetic="true"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 && position.y === 0 ? 'transform 0.45s cubic-bezier(0.2, 0.9, 0.3, 1.2)' : 'transform 0.1s ease-out',
      }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
