"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron, MeshDistortMaterial, Trail, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleOrbit({ color = "#1A1A1A" }) {
  const points = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 2.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={points} positions={positions}>
      <PointMaterial transparent color={color} size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.8} />
    </Points>
  );
}

function FloatingRock({ variant }: { variant: 'home' | 'subpage' }) {
  const rockRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (rockRef.current) {
      rockRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      rockRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      rockRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  const material = (
    <MeshDistortMaterial
      color="#1A1A1A"
      emissive="#0a0a0a"
      distort={0.4}
      speed={1.5}
      roughness={0.1}
      metalness={0.9}
      clearcoat={1}
      clearcoatRoughness={0.1}
    />
  );

  return (
    <Trail width={1.5} color="#8E7C68" length={5} decay={1} local>
      {variant === 'home' ? (
        <Icosahedron ref={rockRef} args={[1.5, 3]} scale={1.2} position={[3.5, 0, -2]}>
          {material}
        </Icosahedron>
      ) : (
        <Octahedron ref={rockRef} args={[1.5, 4]} scale={0.9} position={[-3.5, 1, -1]}>
          {material}
        </Octahedron>
      )}
    </Trail>
  );
}

export default function HeroScene({ variant = 'home' }: { variant?: 'home' | 'subpage' }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#F4F1EA" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#8E7C68" />
        <FloatingRock variant={variant} />
        {/* Adjusted particle color to be prominently dark taupe against light bg */}
        <ParticleOrbit color="#6b5c4d" />
        <fog attach="fog" args={['#F4F1EA', 5, 20]} />
      </Canvas>
    </div>
  );
}
