"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, Sphere, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 180 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3.5 + Math.random() * 4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 2] = 0;
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.y += 0.0015;
    mesh.current.rotation.x += 0.0005;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00c8d7" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function MainModel() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.03;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref} castShadow>
      <torusKnotGeometry args={[1, 0.32, 160, 16, 2, 3]} />
      <MeshDistortMaterial
        color="#00c8d7"
        emissive="#005f70"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.15}
        distort={0.12}
        speed={2}
        wireframe={false}
      />
    </mesh>
  );
}

function OuterRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.02, 8, 100]} />
      <meshBasicMaterial color="#00c8d7" transparent opacity={0.25} />
    </mesh>
  );
}

function OuterRing2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = -state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.25) * 0.5;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.8, 0.015, 8, 100]} />
      <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
    </mesh>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.08;
    ref.current.scale.setScalar(s);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color="#00c8d7" transparent opacity={0.04} side={THREE.BackSide} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00c8d7" />
      <pointLight position={[-5, -3, -3]} intensity={0.8} color="#f97316" />
      <pointLight position={[0, -4, 2]} intensity={0.5} color="#ffffff" />
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <MainModel />
      </Float>
      <GlowSphere />
      <OuterRing />
      <OuterRing2 />
      <Particles count={200} />
    </Canvas>
  );
}
