import { Float, useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SunrunLogo = (props) => {
  const { nodes, materials } = useGLTF('models/Sunrun_Logo.glb');
  const meshRef = useRef();

  // Continuous rotation effect
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01; // Adjust rotation speed
    }
  });

  return (
    <>
      <Float floatIntensity={1}>
        <group {...props} dispose={null}>
          <mesh
            ref={meshRef}
            castShadow
            receiveShadow
            geometry={nodes.Layer.geometry}
            material={materials.SVGMat}
            rotation={[Math.PI / 2, 0, 0]}
            scale={21.846}
          />
        </group>
      </Float>
      <OrbitControls />
    </>
  );
};

useGLTF.preload('models/Sunrun_Logo.glb');

export default SunrunLogo;
