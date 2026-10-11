"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const OLIVE = "#737A1A";
const OLIVE_LIGHT = "#a9b05a";

type Block = { x: number; y: number; w: number; h: number };

/** One "web page" layer: dark glass panel + olive header + content blocks */
function Panel({
  z,
  blocks,
  accent = false,
}: {
  z: number;
  blocks: Block[];
  accent?: boolean;
}) {
  return (
    <group position={[0, 0, z]}>
      <RoundedBox args={[3.4, 2.3, 0.06]} radius={0.07} smoothness={4}>
        <meshStandardMaterial
          color="#14150f"
          metalness={0.55}
          roughness={0.35}
          transparent
          opacity={0.92}
        />
      </RoundedBox>

      {/* browser top bar */}
      <mesh position={[0, 0.98, 0.04]}>
        <boxGeometry args={[3.1, 0.12, 0.02]} />
        <meshStandardMaterial
          color={accent ? OLIVE_LIGHT : OLIVE}
          emissive={OLIVE}
          emissiveIntensity={accent ? 0.6 : 0.25}
        />
      </mesh>

      {blocks.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, 0.04]}>
          <boxGeometry args={[b.w, b.h, 0.02]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? OLIVE : "#2a2c20"}
            emissive={i % 3 === 0 ? OLIVE : "#000000"}
            emissiveIntensity={i % 3 === 0 ? 0.2 : 0}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

const LAYER_BACK: Block[] = [
  { x: -0.75, y: 0.35, w: 1.5, h: 0.14 },
  { x: -0.95, y: 0.1, w: 1.1, h: 0.08 },
  { x: 0.9, y: -0.35, w: 1.1, h: 0.9 },
  { x: -0.8, y: -0.5, w: 1.3, h: 0.5 },
];
const LAYER_MID: Block[] = [
  { x: -0.9, y: 0.45, w: 1.2, h: 0.35 },
  { x: 0.55, y: 0.45, w: 1.7, h: 0.35 },
  { x: -0.9, y: -0.2, w: 1.2, h: 0.7 },
  { x: 0.55, y: -0.2, w: 1.7, h: 0.7 },
  { x: 0, y: -0.78, w: 2.9, h: 0.14 },
];
const LAYER_FRONT: Block[] = [
  { x: -0.7, y: 0.3, w: 1.8, h: 0.22 },
  { x: -0.95, y: -0.05, w: 1.3, h: 0.1 },
  { x: -0.95, y: -0.25, w: 1.0, h: 0.1 },
  { x: -1.0, y: -0.65, w: 0.9, h: 0.3 },
  { x: 1.0, y: -0.1, w: 0.9, h: 1.0 },
];

function Rig({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const px = reduceMotion ? 0 : state.pointer.x;
    const py = reduceMotion ? 0 : state.pointer.y;

    // follow cursor smoothly
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      -0.5 + px * 0.55,
      3,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      0.14 - py * 0.3,
      3,
      delta
    );

    if (ring.current && !reduceMotion) {
      ring.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={reduceMotion ? 0 : 1.4}
        rotationIntensity={0.08}
        floatIntensity={0.5}
      >
        <Panel z={-1.0} blocks={LAYER_BACK} />
        <Panel z={0} blocks={LAYER_MID} />
        <Panel z={1.0} blocks={LAYER_FRONT} accent />
      </Float>

      {/* orbit ring */}
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.9, 0.012, 16, 160]} />
        <meshBasicMaterial color={OLIVE_LIGHT} transparent opacity={0.55} />
      </mesh>

      {/* performance orb */}
      <Float speed={reduceMotion ? 0 : 2} floatIntensity={1.2}>
        <mesh position={[1.9, -1.0, 1.9]}>
          <sphereGeometry args={[0.55, 64, 64]} />
          <MeshDistortMaterial
            color={OLIVE}
            distort={reduceMotion ? 0 : 0.38}
            speed={2.2}
            roughness={0.15}
            metalness={0.35}
          />
        </mesh>
      </Float>

      {/* small accent shard */}
      <Float speed={reduceMotion ? 0 : 1.8} floatIntensity={1.5}>
        <mesh position={[-2.1, 1.2, 1.4]} rotation={[0.6, 0.4, 0]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color={OLIVE_LIGHT}
            wireframe
            emissive={OLIVE_LIGHT}
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      frameloop={reduceMotion ? "demand" : "always"}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={40} color={OLIVE_LIGHT} />
      <pointLight position={[3, 3, -3]} intensity={25} color={OLIVE} />

      <Rig reduceMotion={reduceMotion} />

      {!reduceMotion && (
        <Sparkles
          count={45}
          scale={[9, 6, 5]}
          size={2.2}
          speed={0.35}
          color={OLIVE_LIGHT}
        />
      )}
    </Canvas>
  );
}