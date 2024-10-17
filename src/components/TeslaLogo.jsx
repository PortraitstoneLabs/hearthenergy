import { Float, useGLTF } from '@react-three/drei';

const TeslaLogo = (props) => {
  const { nodes, materials } = useGLTF('models/Tesla_Logo.glb');

  return (
    <Float floatIntensity={1}>
    <group {...props} dispose={null}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={6.706}
      />
    </group>
    </Float>
  );
};

useGLTF.preload('models/Tesla_Logo.glb');

export default TeslaLogo;