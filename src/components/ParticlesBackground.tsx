import React, { useCallback, memo } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const particlesOptions = {
  background: {
    color: {
      value: '#000000',
    },
  },
  fpsLimit: 30,
  particles: {
    color: {
      value: ['#9333EA', '#3B82F6'],
    },
    links: {
      color: '#4c1d95',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
    },
    number: {
      density: {
        enable: true,
        area: 2000,
      },
      value: 20,
    },
    opacity: {
      value: 0.2,
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: false,
};

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 opacity-30">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ParticlesBackground);