import React, { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load heavy particles components
const Particles = React.lazy(() => import('react-particles'));
const { loadSlim } = React.lazy(() => import('tsparticles-slim'));

const isMobile = () => window.innerWidth <= 768;

const getParticlesConfig = (mobile: boolean) => ({
  fullScreen: false,
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: mobile ? 30 : 60,
  particles: {
    color: {
      value: ['#9333EA', '#3B82F6'],
    },
    links: {
      color: '#4c1d95',
      distance: mobile ? 100 : 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: mobile ? 0.2 : 0.3,
    },
    number: {
      density: {
        enable: true,
        area: mobile ? 800 : 1200,
      },
      value: mobile ? 8 : 12,
      max: mobile ? 10 : 15,
    },
    opacity: {
      value: 0.2,
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
  smooth: true,
});

const ParticlesBackground = memo(() => {
  const [mobile, setMobile] = useState(isMobile());
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = async (engine: any) => {
    const { loadSlim } = await import('tsparticles-slim');
    await loadSlim(engine);
  };

  // Don't render particles on tall mobile screens
  if (mobile && window.innerHeight > 1000) {
    return null;
  }

  return (
    <div ref={ref} className="fixed inset-0 -z-10 opacity-30">
      {inView && (
        <React.Suspense fallback={<div className="bg-black" />}>
          <Particles init={particlesInit} options={getParticlesConfig(mobile)} />
        </React.Suspense>
      )}
    </div>
  );
});

ParticlesBackground.displayName = 'ParticlesBackground';

export default ParticlesBackground;