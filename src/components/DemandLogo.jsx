import { Float, useGLTF } from '@react-three/drei';

const DemandLogo = (props) => {
  const { nodes, materials } = useGLTF('models/demand.glb');

  return (
    <Float floatIntensity={10}>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rect1-6-5'].geometry}
        material={materials['SVGMat.010']}
        position={[-2.11, -0.022, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={17.806}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rect1.geometry}
        material={materials['SVGMat.011']}
        position={[-2.11, -0.022, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={17.806}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['rect1-6'].geometry}
        material={materials['SVGMat.012']}
        position={[-2.11, -0.022, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={17.806}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        material={materials['SVGMat.014']}
        position={[-2.11, -0.022, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={17.806}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['SVGMat.014']}
        position={[-2.138, 0.089, -0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.572}
      />
    </group>
    </Float>
  );
};

useGLTF.preload('models/demand.glb');

export default DemandLogo;