import { Float, MeshDistortMaterial, OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useMemo } from "react";
import { CatmullRomCurve3, Vector3 } from "three";

type NodeProps = GroupProps & {
  position: [number, number, number];
  radius?: number;
  color?: string;
};

const pulseColors = ["#14b8a6", "#38bdf8", "#818cf8", "#f472b6", "#facc15"];

function EnergyNode({ position, radius = 0.38, color = "#38bdf8", ...rest }: NodeProps) {
  return (
    <Float rotationIntensity={0.5} floatIntensity={1.8} speed={2}>
      <group position={position} {...rest}>
        <mesh>
          <sphereGeometry args={[radius, 64, 64]} />
          <MeshDistortMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.7}
            roughness={0.1}
            metalness={0.45}
            distort={0.22}
            speed={1.8}
          />
        </mesh>
        <mesh scale={1.4}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

function EnergyRibbon() {
  const curve = useMemo(() => {
    const points: Vector3[] = [];
    for (let i = 0; i < 220; i++) {
      const angle = (i / 220) * Math.PI * 4;
      const radius = 4 + Math.sin(i * 0.18) * 0.6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(i * 0.1) * 1.6;
      const z = Math.sin(angle) * radius;
      points.push(new Vector3(x, y, z));
    }
    return new CatmullRomCurve3(points, false, "catmullrom", 0.5);
  }, []);

  return (
    <group>
      <mesh>
        <tubeGeometry args={[curve, 220, 0.1, 12, false]} />
        <meshStandardMaterial
          color="#818cf8"
          roughness={0.1}
          metalness={0.9}
          emissive="#6366f1"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh>
        <tubeGeometry args={[curve, 220, 0.18, 8, false]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const nodes = useMemo<[number, number, number, string][]>(() => {
    return Array.from({ length: 12 }, (_, i) => [
      Math.cos(i) * 3.5 + (Math.random() - 0.5) * 1.2,
      (Math.random() - 0.5) * 3.8,
      Math.sin(i) * 3.5 + (Math.random() - 0.5) * 1.2,
      pulseColors[i % pulseColors.length]
    ]);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={52} />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 6]} intensity={1.2} />
      <directionalLight position={[-6, -2, -4]} intensity={0.6} color="#f472b6" />
      <Stars radius={120} depth={40} count={6000} factor={4} fade speed={1.8} />
      <group>
        <EnergyRibbon />
        {nodes.map(([x, y, z, color], idx) => (
          <EnergyNode key={idx} position={[x, y, z]} color={color} />
        ))}
      </group>
    </>
  );
}

