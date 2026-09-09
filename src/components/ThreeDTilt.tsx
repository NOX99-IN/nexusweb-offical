import React, { useRef, useEffect } from 'react';

interface ThreeDTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt in degrees (default 10)
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
  const glareRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on hoverable devices (mouse/pointer)
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;
    if (!cardRef.current) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const xPercent = (clientX / rect.width) * 100;
      const yPercent = (clientY / rect.height) * 100;

      const tiltX = ((yPercent - 50) / 50) * -maxTilt;
      const tiltY = ((xPercent - 50) / 50) * maxTilt;

      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${tiltX.toFixed(
        2
      )}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
      cardRef.current.style.transition = 'transform 0.08s ease-out';

      if (glare && glareRef.current) {
        glareRef.current.style.opacity = '0.22';
        glareRef.current.style.background = `radial-gradient(circle 280px at ${xPercent.toFixed(
          1
        )}% ${yPercent.toFixed(1)}%, rgba(255, 255, 255, 0.4), transparent 80%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      cardRef.current.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    }
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
      glareRef.current.style.transition = 'opacity 0.4s ease';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}

      {/* 3D Specular Glare Layer */}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-300"
          style={{
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  );
};
