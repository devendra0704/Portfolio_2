import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/Desk.glb");

  return (
    <primitive 
    object={scene} 
    position={[0.2, -1, 0]}
    rotation={[0, Math.PI / 4, 0]} 
    scale={[1,1,1]}
    >
      {/* <meshStandardMaterial metalness={0.5} roughness={0.3} /> */}
    </primitive>
  );
};

const Desktop = () => {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[0.1,1.2, -2]} />
      <Model />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Desktop;
