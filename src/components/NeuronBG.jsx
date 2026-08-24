import React, { useEffect, useState } from "react";
// 1. Hapus initParticlesEngine dari sini
import Particles from "@tsparticles/react"; 
import { loadSlim } from "@tsparticles/slim";
// 2. Import tsParticles langsung dari engine-nya!
import { tsParticles } from "@tsparticles/engine"; 

export default function NeuronBG({ darkMode = false }) {
  const [init, setInit] = useState(false);
  const particleColor = darkMode ? "#818cf8" : "#4f46e5";

  useEffect(() => {
    // 3. Kita paksa nyalakan mesinnya secara langsung (tanpa perantara)
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
        pointerEvents: "none",
      }}
      options={{
        fullScreen: { enable: false }, // Wajib agar tidak kabur dari wadah
        background: { color: { value: "transparent" } },
        particles: {
          color: { value: particleColor },
          links: {
            color: particleColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: { enable: true, speed: 1.5 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}