import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Cylinder, Text3D, Float } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import * as THREE from 'three';

// Pipe Bowl Component
const PipeBowl = ({ glowing }: { glowing: boolean }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current && glowing) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.4, 32, 32]} position={[0, 1, 0]}>
      <meshStandardMaterial
        color="#F7E7CE"
        transparent
        opacity={0.8}
        emissive={glowing ? "#F7E7CE" : "#000000"}
        emissiveIntensity={glowing ? 0.3 : 0}
      />
    </Sphere>
  );
};

// Pipe Stem Component
const PipeStem = () => {
  return (
    <Cylinder args={[0.1, 0.15, 3, 32]} position={[1.5, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
      <meshStandardMaterial
        color="#F7E7CE"
        transparent
        opacity={0.9}
        metalness={0.3}
        roughness={0.2}
      />
    </Cylinder>
  );
};

// Flame Component
const Flame = ({ visible }: { visible: boolean }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current && visible) {
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.2;
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.8 + Math.sin(state.clock.elapsedTime * 6) * 0.2;
    }
  });

  if (!visible) return null;

  return (
    <Cylinder ref={meshRef} args={[0.05, 0.08, 0.3, 8]} position={[0, 0.5, 0]}>
      <meshStandardMaterial
        color="#FFA500"
        emissive="#FF4500"
        emissiveIntensity={0.8}
        transparent
        opacity={0.8}
      />
    </Cylinder>
  );
};

// Smoke Particles
const SmokeParticle = ({ position, delay }: { position: Vector3; delay: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime - delay;
      if (time > 0) {
        meshRef.current.position.y = position.y + (time * 2) % 4;
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        material.opacity = Math.max(0, 0.6 - (time % 4) * 0.15);
        meshRef.current.scale.setScalar(0.1 + (time % 4) * 0.1);
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.1, 8, 8]} position={position.toArray()}>
      <meshStandardMaterial
        color="#F7E7CE"
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

// Main Pipe Scene
const PipeScene = () => {
  const groupRef = useRef<Group>(null!);
  const flameVisible = useRef(true);
  const glowing = useRef(false);

  const smokeParticles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      position: new Vector3(
        (Math.random() - 0.5) * 0.5,
        1.4 + Math.random() * 0.2,
        (Math.random() - 0.5) * 0.5
      ),
      delay: i * 0.2,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Animation cycle: flame -> glow -> smoke
      const cycle = (state.clock.elapsedTime % 8);
      flameVisible.current = cycle < 2;
      glowing.current = cycle >= 1.5 && cycle < 4;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.2}
    >
      <group ref={groupRef}>
        <PipeBowl glowing={glowing.current} />
        <PipeStem />
        <Flame visible={flameVisible.current} />
        
        {smokeParticles.map((particle, i) => (
          <SmokeParticle
            key={i}
            position={particle.position}
            delay={particle.delay}
          />
        ))}
        
        {/* Ambient glow */}
        <pointLight
          position={[0, 1, 0]}
          color="#F7E7CE"
          intensity={glowing.current ? 2 : 0.5}
          distance={5}
        />
      </group>
    </Float>
  );
};

// Main Animated Pipe Component
export const AnimatedPipe = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4, 2, 4], fov: 50 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          color="#F7E7CE"
        />
        
        <PipeScene />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};