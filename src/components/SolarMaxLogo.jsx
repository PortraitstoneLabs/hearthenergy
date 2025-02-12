import { useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const SolarMaxLogo = (props) => {
  const targetRef = useRef();
  const { nodes, materials } = useGLTF('models/SolarMax_Logo.glb');

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [targetRef]);

  return (
    <group ref={targetRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Path_5.geometry}
        material={materials['SVGMat.002']}
        position={[-5.621, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={22.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Path_6.geometry}
        material={materials['SVGMat.003']}
        position={[-5.621, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={22.498}
      />
    </group>
  );
};

useGLTF.preload('models/SolarMax_Logo.glb');

export default SolarMaxLogo;
