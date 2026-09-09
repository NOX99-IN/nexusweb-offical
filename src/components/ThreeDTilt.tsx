import React, { useState, useRef, useCallback } from 'react';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt in degrees (default 12)
  glare?: boolean;
  scale?: number; // scale on hover (default 1.02)
  perspective?: number; // default 1000px
}

export const ThreeDTilt: React.FC<ThreeDTiltProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  perspective = 1000,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const xPercent = (clientX / rect.width) * 100;
      const yPercent = (clientY / rect.height) * 100;

      // Calculate tilt angles:
      // Moving mouse right tilts around Y axis (rotateY positive)
      // Moving mouse down tilts around X axis (rotateX negative)
      const tiltX = ((yPercent - 50) / 50) * -maxTilt;
      const tiltY = ((xPercent - 50) / 50) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(
          2
        )}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      if (glare) {
        setGlarePosition({
          x: xPercent,
          y: yPercent,
          opacity: 0.22,
        });
      }
    },
    [maxTilt, glare, scale, perspective]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: 'preserve-3d',
        transition: isHovered
          ? 'transform 0.1s cubic-bezier(0.2, 0, 0, 1)'
          : 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* 3D Specular Glare Layer */}
      {glare && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 80%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  );
};
