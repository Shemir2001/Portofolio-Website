import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

/* ─── Wireframe sphere that slowly rotates ─── */
const WireGlobe = ({ color }) => {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 28, 28]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
};

/* ─── Particles that radiate outward ─── */
const Particles = ({ count = 200, color }) => {
  const pointsRef = useRef();

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + Math.random() * 0.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      vel.push({
        x: pos[i * 3] * 0.3,
        y: pos[i * 3 + 1] * 0.3,
        z: pos[i * 3 + 2] * 0.3,
        speed: 0.3 + Math.random() * 0.7,
      });
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      posArray[idx] += velocities[i].x * delta * velocities[i].speed;
      posArray[idx + 1] += velocities[i].y * delta * velocities[i].speed;
      posArray[idx + 2] += velocities[i].z * delta * velocities[i].speed;
      const dist = Math.sqrt(
        posArray[idx] ** 2 + posArray[idx + 1] ** 2 + posArray[idx + 2] ** 2
      );
      if (dist > 5) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2;
        posArray[idx] = r * Math.sin(phi) * Math.cos(theta);
        posArray[idx + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[idx + 2] = r * Math.cos(phi);
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.03} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

/* ─── Radiating lines (bursts) ─── */
const Bursts = ({ count = 60, color }) => {
  const linesRef = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r1 = 2.1;
      const r2 = 2.8 + Math.random() * 2;
      positions[i * 6] = r1 * Math.sin(phi) * Math.cos(theta);
      positions[i * 6 + 1] = r1 * Math.sin(phi) * Math.sin(theta);
      positions[i * 6 + 2] = r1 * Math.cos(phi);
      positions[i * 6 + 3] = r2 * Math.sin(phi) * Math.cos(theta);
      positions[i * 6 + 4] = r2 * Math.sin(phi) * Math.sin(theta);
      positions[i * 6 + 5] = r2 * Math.cos(phi);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((_, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.4} />
    </lineSegments>
  );
};

/* ─── Main canvas component ─── */
const AnimatedGlobe = () => {
  const { isDark } = useTheme();
  const accentColor = isDark ? '#e63946' : '#d32f2f';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        position: 'relative',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <WireGlobe color={accentColor} />
        <Particles count={180} color={accentColor} />
        <Bursts count={50} color={accentColor} />
      </Canvas>
    </div>
  );
};

export default AnimatedGlobe;
