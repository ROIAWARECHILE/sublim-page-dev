"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3.5 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame(({ clock }) => {
    if (mesh.current) mesh.current.rotation.y = clock.getElapsedTime() * 0.04;
  });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#00c8d7" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function MainModel() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.18;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.26;
  });
  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1, 0.3, 180, 20, 2, 3]} />
      <MeshDistortMaterial
        color="#00c8d7"
        metalness={0.9}
        roughness={0.1}
        distort={0.25}
        speed={2}
        emissive="#003d42"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function Ring({ radius, color, speed }: { radius: number; color: string; speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * speed;
    mesh.current.rotation.z = clock.getElapsedTime() * speed * 0.5;
  });
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.015, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function GlowSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const s = 1 + Math.sin(clock.getElapsedTime() * 1.2) * 0.05;
    mesh.current.scale.setScalar(s);
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshBasicMaterial color="#00c8d7" transparent opacity={0.04} side={THREE.BackSide} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}  intensity={80} color="#00c8d7" />
      <pointLight position={[-4, -3, 2]} intensity={40} color="#f97316" />
      <pointLight position={[0, 0, 4]}  intensity={30} color="#ffffff" />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <MainModel />
        <Ring radius={2.1} color="#00c8d7" speed={0.4} />
        <Ring radius={2.7} color="#f97316" speed={-0.25} />
        <GlowSphere />
      </Float>

      <Particles />
    </Canvas>
  );
}
