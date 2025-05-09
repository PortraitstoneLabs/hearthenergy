import { Float, useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SolarTechLogo = (props) => {
  const { nodes, materials } = useGLTF('models/SolarTechLogo.glb');
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
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.003']}
        position={[-2.15, -0.177, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.746]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.002']}
        position={[0.367, -0.174, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.547}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['Material.001']}
        position={[1.211, -0.819, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.245}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['Material.001']}
        position={[0.434, -1.339, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.212}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['Material.001']}
        position={[-0.411, -1.302, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.186}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials['Material.001']}
        position={[-1.126, -0.783, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials['Material.001']}
        position={[-1.161, 0.871, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials['Material.001']}
        position={[-0.43, 1.39, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials['Material.001']}
        position={[0.421, 1.426, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials['Material.001']}
        position={[1.17, 0.907, -0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.109}
      />
    </group>
      </Float>
      <OrbitControls />
    </>
  );
};

useGLTF.preload('models/SolarTechLogo.glb');

export default SolarTechLogo;
