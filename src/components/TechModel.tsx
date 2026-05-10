"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function WireframeSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.4, 18, 18]} />
      <meshBasicMaterial color="#00c8d7" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <MeshDistortMaterial
        color="#00c8d7"
        emissive="#003d4a"
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.1}
        distort={0.25}
        speed={3}
      />
    </mesh>
  );
}

function OrbitDot({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function Particles3D() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.002;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00c8d7" transparent opacity={0.5} />
    </points>
  );
}

export default function TechModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={2} color="#00c8d7" />
      <pointLight position={[-3, -3, 2]} intensity={0.8} color="#f97316" />
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <CoreSphere />
        <WireframeSphere />
      </Float>
      <OrbitDot radius={2.2} speed={0.8} offset={0} color="#00c8d7" />
      <OrbitDot radius={1.8} speed={1.2} offset={2.1} color="#f97316" />
      <OrbitDot radius={2.5} speed={0.6} offset={4.2} color="#22c55e" />
      <Particles3D />
    </Canvas>
  );
}
