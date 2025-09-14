import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Cylinder, Box, Float, useTexture } from '@react-three/drei';
import { Mesh, Group, Vector3, Color, DoubleSide, AdditiveBlending } from 'three';
import * as THREE from 'three';

// Enhanced Glass Material Component
const GlassMaterial = ({ glowing, emissiveColor = "#FF6B35", emissiveIntensity = 0 }) => {
  return (
    <meshPhysicalMaterial
      color="#F8F8FF"
      metalness={0.02}
      roughness={0.05}
      transmission={0.95}
      thickness={0.5}
      ior={1.5}
      clearcoat={1.0}
      clearcoatRoughness={0.1}
      transparent={true}
      opacity={0.8}
      emissive={glowing ? emissiveColor : "#000000"}
      emissiveIntensity={glowing ? emissiveIntensity : 0}
      side={DoubleSide}
    />
  );
};

// Enhanced Meth Pipe Bowl with more realistic proportions
const MethPipeBowl = ({ glowing }: { glowing: boolean }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current && glowing) {
      const material = meshRef.current.material as THREE.MeshPhysicalMaterial;
      material.emissiveIntensity = 0.8 + Math.sin(state.clock.elapsedTime * 4) * 0.4;
    }
  });

  return (
    <group>
      {/* Main bowl - more bulbous shape */}
      <Sphere ref={meshRef} args={[0.7, 32, 32]} position={[0, 0.8, 0]} scale={[1.2, 0.9, 1.2]}>
        <GlassMaterial glowing={glowing} emissiveIntensity={0.8} />
      </Sphere>
      
      {/* Bowl neck - connecting to stem */}
      <Cylinder args={[0.12, 0.18, 0.3, 16]} position={[0.4, 0.65, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
    </group>
  );
};

// Enhanced Straight Stem with realistic glass thickness
const MethPipeStem = () => {
  return (
    <group>
      {/* Main stem */}
      <Cylinder args={[0.09, 0.09, 4.2, 16]} position={[2.3, 0.75, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
      
      {/* Stem reinforcement rings for realism */}
      <Cylinder args={[0.11, 0.11, 0.05, 16]} position={[1.2, 0.82, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
      <Cylinder args={[0.11, 0.11, 0.05, 16]} position={[3.4, 0.68, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
    </group>
  );
};

// Enhanced Mouthpiece with flared end
const MethPipeMouthpiece = () => {
  return (
    <group>
      {/* Mouthpiece tube */}
      <Cylinder args={[0.12, 0.09, 0.4, 16]} position={[4.3, 0.88, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
      
      {/* Flared end */}
      <Cylinder args={[0.15, 0.12, 0.1, 16]} position={[4.5, 0.91, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <GlassMaterial glowing={false} />
      </Cylinder>
    </group>
  );
};

// Advanced Flame Component with realistic fire simulation
const MethFlame = ({ visible }: { visible: boolean }) => {
  const flameRef = useRef<Group>(null!);
  const innerFlameRef = useRef<Mesh>(null!);
  const outerFlameRef = useRef<Mesh>(null!);
  
  useFrame((state) => {
    if (flameRef.current && visible) {
      const time = state.clock.elapsedTime;
      
      // Main flame movement
      flameRef.current.scale.y = 1.0 + Math.sin(time * 12) * 0.3;
      flameRef.current.scale.x = 0.8 + Math.sin(time * 10) * 0.2;
      flameRef.current.rotation.z = Math.sin(time * 8) * 0.1;
      
      // Inner flame flicker
      if (innerFlameRef.current) {
        const innerMaterial = innerFlameRef.current.material as THREE.MeshStandardMaterial;
        innerMaterial.emissiveIntensity = 1.5 + Math.sin(time * 15) * 0.5;
      }
      
      // Outer flame flicker
      if (outerFlameRef.current) {
        const outerMaterial = outerFlameRef.current.material as THREE.MeshStandardMaterial;
        outerMaterial.opacity = 0.7 + Math.sin(time * 18) * 0.2;
      }
    }
  });

  if (!visible) return null;

  return (
    <group ref={flameRef} position={[0, 0.2, 0]}>
      {/* Outer flame - orange/red */}
      <Cylinder ref={outerFlameRef} args={[0.12, 0.08, 0.5, 8]} position={[0, 0.1, 0]}>
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF6B35"
          emissiveIntensity={1.0}
          transparent
          opacity={0.7}
          side={DoubleSide}
        />
      </Cylinder>
      
      {/* Inner flame - blue/white hot core */}
      <Cylinder ref={innerFlameRef} args={[0.06, 0.04, 0.3, 8]} position={[0, 0.05, 0]}>
        <meshStandardMaterial
          color="#87CEEB"
          emissive="#4A90E2"
          emissiveIntensity={1.5}
          transparent
          opacity={0.9}
          side={DoubleSide}
        />
      </Cylinder>
    </group>
  );
};

// Advanced Vapor Particle with billboard effect
const VaporParticle = ({ position, delay, index }: { position: Vector3; delay: number; index: number }) => {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime - delay;
      if (time > 0) {
        const lifespan = 4;
        const progress = (time % lifespan) / lifespan;
        
        // Realistic vapor movement - rising and dispersing
        meshRef.current.position.y = position.y + progress * 3 + Math.sin(time * 2 + index) * 0.4;
        meshRef.current.position.x = position.x + Math.sin(time * 1.5 + index) * 0.6;
        meshRef.current.position.z = position.z + Math.cos(time * 1.2 + index) * 0.3;
        
        // Opacity and scale changes
        const material = meshRef.current.material as THREE.MeshStandardMaterial;
        material.opacity = Math.max(0, 0.8 * (1 - progress * 1.2));
        
        const scale = 0.1 + progress * 0.4;
        meshRef.current.scale.setScalar(scale);
        
        // Always face camera (billboard effect)
        meshRef.current.lookAt(state.camera.position);
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.1, 8, 8]} position={position.toArray()}>
      <meshStandardMaterial
        color="#F0F8FF"
        transparent
        opacity={0.6}
        emissive="#E6E6FA"
        emissiveIntensity={0.2}
        blending={AdditiveBlending}
        side={DoubleSide}
      />
    </Sphere>
  );
};

// Enhanced Crystal Residue with irregular geometry
const CrystalResidue = ({ visible }: { visible: boolean }) => {
  const crystalRef = useRef<Group>(null!);
  
  useFrame((state) => {
    if (crystalRef.current && visible) {
      const material = crystalRef.current.children[0] as Mesh;
      if (material.material) {
        const mat = material.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
    }
  });

  if (!visible) return null;
  
  return (
    <group ref={crystalRef} position={[0, 0.5, 0]}>
      {/* Main crystal chunk */}
      <Box args={[0.35, 0.12, 0.35]} rotation={[0.2, 0.3, 0.1]}>
        <meshStandardMaterial
          color="#F8F8FF"
          transparent
          opacity={0.8}
          emissive="#E0E0E0"
          emissiveIntensity={0.4}
          metalness={0.1}
          roughness={0.2}
        />
      </Box>
      
      {/* Smaller crystal fragments */}
      <Box args={[0.15, 0.08, 0.15]} position={[0.1, 0.02, 0.1]} rotation={[0.5, 0.8, 0.2]}>
        <meshStandardMaterial
          color="#F0F8FF"
          transparent
          opacity={0.7}
          emissive="#E0E0E0"
          emissiveIntensity={0.3}
          metalness={0.1}
          roughness={0.3}
        />
      </Box>
      
      <Box args={[0.12, 0.06, 0.12]} position={[-0.08, 0.01, -0.05]} rotation={[0.3, -0.4, 0.6]}>
        <meshStandardMaterial
          color="#F5F5F5"
          transparent
          opacity={0.6}
          emissive="#E0E0E0"
          emissiveIntensity={0.25}
          metalness={0.1}
          roughness={0.4}
        />
      </Box>
    </group>
  );
};

// Main Enhanced Meth Pipe Scene
const MethPipeScene = () => {
  const groupRef = useRef<Group>(null!);
  const flameVisible = useRef(true);
  const glowing = useRef(false);
  const crystalVisible = useRef(true);

  const vaporParticles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      position: new Vector3(
        (Math.random() - 0.5) * 0.6,
        1.3 + Math.random() * 0.4,
        (Math.random() - 0.5) * 0.6
      ),
      delay: i * 0.12,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation for dynamic viewing
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Enhanced animation cycle
      const cycle = (state.clock.elapsedTime % 12);
      flameVisible.current = cycle < 4;
      glowing.current = cycle >= 2 && cycle < 8;
      crystalVisible.current = cycle >= 1;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.03}
      floatIntensity={0.08}
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
            index={i}
          />
        ))}
        
        {/* Enhanced Lighting Setup */}
        {/* Main bowl glow */}
        <pointLight
          position={[0, 0.8, 0]}
          color="#FF6B35"
          intensity={glowing.current ? 4 : 1.5}
          distance={10}
          decay={2}
        />
        
        {/* Flame light */}
        <pointLight
          position={[0, 0.3, 0]}
          color="#4A90E2"
          intensity={flameVisible.current ? 3 : 0}
          distance={6}
          decay={2}
        />
        
        {/* Ambient rim lighting */}
        <pointLight
          position={[2, 2, 2]}
          color="#F7E7CE"
          intensity={0.8}
          distance={15}
          decay={1}
        />
        
        {/* Back lighting for glass effect */}
        <pointLight
          position={[-1, 1, -2]}
          color="#FFFFFF"
          intensity={0.6}
          distance={12}
          decay={1}
        />
      </group>
    </Float>
  );
};

// Main Enhanced Animated Meth Pipe Component
export const AnimatedPipe = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 45 }}
        className="bg-transparent"
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Enhanced Lighting Environment */}
        <ambientLight intensity={0.2} color="#F7E7CE" />
        <directionalLight
          position={[10, 10, 8]}
          intensity={1.5}
          color="#F7E7CE"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Subtle environment lighting */}
        <hemisphereLight 
          args={["#87CEEB", "#2F2F2F", 0.3]}
        />
        
        <MethPipeScene />
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};