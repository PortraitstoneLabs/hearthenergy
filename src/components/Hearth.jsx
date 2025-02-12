import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Hearth(props) {
  const { nodes, materials, animations } = useGLTF('/models/Hearth_Energy_Logo.glb');
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  
  // Assuming the model has multiple materials for different mesh parts
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh         
        castShadow
        receiveShadow 
        geometry={nodes.Hearth001_1.geometry} material={materials['Material.001']} 
        position={[0, 0, 0]}
        rotation={[0, 0, 95.6]}
        scale={80.408}/>
        <mesh         
        castShadow
        receiveShadow  geometry={nodes.Hearth001_2.geometry} material={materials['Material.003']} 
        position={[0, 0, 0]}
        rotation={[0, 0, 95.6]}
        scale={80.408}/>
        <mesh         
        castShadow
        receiveShadow  geometry={nodes.Hearth001_3.geometry} material={materials['Material.002']} 
        position={[0, 0, 0]}
        rotation={[0, 0, 95.6]}
        scale={80.408}/>
      </group>
    </group>
  );
}

useGLTF.preload('/models/Hearth_Energy_Logo.glb');
