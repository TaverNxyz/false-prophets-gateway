import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Cylinder, Box, Float } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import * as THREE from 'three';

// Meth Pipe Bowl Component - More bulbous and realistic
const MethPipeBowl = ({ glowing }: { glowing: boolean }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current && glowing) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.6, 32, 32]} position={[0, 0.8, 0]} scale={[1, 0.8, 1]}>
      <meshStandardMaterial
        color="#E8E8E8"
        transparent
        opacity={0.7}
        emissive={glowing ? "#FF6B35" : "#000000"}
        emissiveIntensity={glowing ? 0.5 : 0}
        metalness={0.1}
        roughness={0.1}
      />
    </Sphere>
  );
};

// Long Straight Stem - More realistic meth pipe proportions
const MethPipeStem = () => {
  return (
    <Cylinder args={[0.08, 0.08, 4, 16]} position={[2.2, 0.8, 0]} rotation={[0, 0, -Math.PI / 12]}>
      <meshStandardMaterial
        color="#E8E8E8"
        transparent
        opacity={0.8}
        metalness={0.1}
        roughness={0.1}
      />
    </Cylinder>
  );
};

// Mouthpiece
const MethPipeMouthpiece = () => {
  return (
    <Cylinder args={[0.12, 0.08, 0.3, 16]} position={[4.2, 0.9, 0]} rotation={[0, 0, -Math.PI / 12]}>
      <meshStandardMaterial
        color="#E8E8E8"
        transparent
        opacity={0.8}
        metalness={0.1}
        roughness={0.1}
      />
    </Cylinder>
  );
};

// Flame Component - More intense and realistic
const MethFlame = ({ visible }: { visible: boolean }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current && visible) {
      meshRef.current.scale.y = 1.2 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
      meshRef.current.scale.x = 0.8 + Math.sin(state.clock.elapsedTime * 8) * 0.2;
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.9 + Math.sin(state.clock.elapsedTime * 12) * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <Cylinder ref={meshRef} args={[0.08, 0.12, 0.4, 8]} position={[0, 0.2, 0]}>
      <meshStandardMaterial
        color="#4A90E2"
        emissive="#1E90FF"
        emissiveIntensity={1.2}
        transparent
        opacity={0.9}
      />
    </Cylinder>
  );
};

// Vapor/Smoke Particles - More realistic vapor clouds
const VaporParticle = ({ position, delay }: { position: Vector3; delay: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime - delay;
      if (time > 0) {
        meshRef.current.position.y = position.y + (time * 1.5) % 3;
        meshRef.current.position.x = position.x + Math.sin(time * 2) * 0.3;
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        material.opacity = Math.max(0, 0.8 - (time % 3) * 0.25);
        meshRef.current.scale.setScalar(0.15 + (time % 3) * 0.15);
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.15, 8, 8]} position={position.toArray()}>
      <meshStandardMaterial
        color="#FFFFFF"
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

// Crystal residue inside bowl
const CrystalResidue = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  
  return (
    <Box args={[0.3, 0.1, 0.3]} position={[0, 0.5, 0]}>
      <meshStandardMaterial
        color="#F0F8FF"
        transparent
        opacity={0.6}
        emissive="#E0E0E0"
        emissiveIntensity={0.3}
      />
    </Box>
  );
};

// Main Meth Pipe Scene
const MethPipeScene = () => {
  const groupRef = useRef<Group>(null!);
  const flameVisible = useRef(true);
  const glowing = useRef(false);
  const crystalVisible = useRef(true);

  const vaporParticles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      position: new Vector3(
        (Math.random() - 0.5) * 0.4,
        1.2 + Math.random() * 0.3,
        (Math.random() - 0.5) * 0.4
      ),
      delay: i * 0.15,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      
      // Animation cycle: flame -> glow -> vapor
      const cycle = (state.clock.elapsedTime % 10);
      flameVisible.current = cycle < 3;
      glowing.current = cycle >= 2 && cycle < 6;
      crystalVisible.current = cycle >= 1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.05}
      floatIntensity={0.1}
    >
      <group ref={groupRef}>
        <MethPipeBowl glowing={glowing.current} />
        <MethPipeStem />
        <MethPipeMouthpiece />
        <MethFlame visible={flameVisible.current} />
        <CrystalResidue visible={crystalVisible.current} />
        
        {vaporParticles.map((particle, i) => (
          <VaporParticle
            key={i}
            position={particle.position}
            delay={particle.delay}
          />
        ))}
        
        {/* Enhanced lighting */}
        <pointLight
          position={[0, 0.8, 0]}
          color="#FF6B35"
          intensity={glowing.current ? 3 : 1}
          distance={8}
        />
        <pointLight
          position={[0, 0.2, 0]}
          color="#4A90E2"
          intensity={flameVisible.current ? 2 : 0}
          distance={4}
        />
      </group>
    </Float>
  );
};

// Main Animated Meth Pipe Component
export const AnimatedPipe = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 45 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[8, 8, 5]}
          intensity={1.2}
          color="#F7E7CE"
        />
        
        <MethPipeScene />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};