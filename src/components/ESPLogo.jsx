import { Float, useGLTF } from '@react-three/drei';

const ESPLogo = (props) => {
  const { nodes, materials } = useGLTF('models/ESP_Logo.glb');

  return (
    <Float floatIntensity={1}>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path2-3'].geometry}
        material={materials['SVGMat.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path5-2'].geometry}
        material={materials['SVGMat.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50.062}
      />
    </group>
    </Float>
  );
};

useGLTF.preload('models/ESP_Logo.glb');

export default ESPLogo;