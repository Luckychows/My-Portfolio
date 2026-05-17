"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const points = useMemo(() => {
    const positions = new Float32Array(1200 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.035;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled>
      <PointMaterial transparent color="#22d3ee" size={0.018} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

export function CyberBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }} dpr={[1, 1.5]}>
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.35}>
          <ParticleField />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-[0.14]" />
      <div className="absolute inset-0 scanline opacity-20" />
    </div>
  );
}
