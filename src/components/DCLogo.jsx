import { Float, useGLTF } from '@react-three/drei';

const DCLogo = (props) => {
  const { nodes, materials } = useGLTF('models/DC_Logo.glb');

  return (
    <Float floatIntensity={10}>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path2-1'].geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path4-9'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path6-8'].geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path8-6'].geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path10-4'].geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path18-4'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path26-2'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path29-0'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path31-4'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path33-6'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path35-3'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path37-1'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path39-5'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path41-3'].geometry}
        material={materials['SVGMat.054']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path43.geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path44.geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path45.geometry}
        material={materials['SVGMat.039']}
        position={[-4.486, -0.004, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['path20-8001'].geometry}
        material={materials['SVGMat.054']}
        position={[-3.369, 0.075, -0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={30.677}
      />
    </group>
    </Float>
  );
};

useGLTF.preload('models/DC_Logo.glb');

export default DCLogo;