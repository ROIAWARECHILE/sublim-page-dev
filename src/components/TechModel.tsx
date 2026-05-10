"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WireframeSphere() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.15;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.6, 24, 24]} />
      <meshBasicMaterial color="#00c8d7" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function CoreSphere() {
  return (
    <mesh>
      <sphereGeometry args={[0.9, 64, 64]} />
      <MeshDistortMaterial
        color="#00c8d7"
        metalness={1}
        roughness={0.1}
        distort={0.3}
        speed={2.5}
        emissive="#002d33"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function OrbitRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const group = useRef<THREE.Group>(null);
  const dot   = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!group.current || !dot.current) return;
    const t = clock.getElapsedTime() * speed;
    dot.current.position.x = Math.cos(t) * radius;
    dot.current.position.z = Math.sin(t) * radius;
  });

  return (
    <group ref={group} rotation={[tilt, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 80]} />
        <meshBasicMaterial color={color} transparent opacity={0.25} />
      </mesh>
      <mesh ref={dot}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const mesh = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (mesh.current) mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#00c8d7" transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

export default function TechModel() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]}  intensity={60} color="#00c8d7" />
      <pointLight position={[-3, -3, 2]} intensity={30} color="#f97316" />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <CoreSphere />
        <WireframeSphere />
        <OrbitRing radius={2.2} color="#00c8d7"  speed={0.6}  tilt={0.3} />
        <OrbitRing radius={1.8} color="#f97316"  speed={-0.4} tilt={1.0} />
        <OrbitRing radius={2.6} color="#22c55e"  speed={0.3}  tilt={-0.5} />
      </Float>

      <Particles />
    </Canvas>
  );
}
