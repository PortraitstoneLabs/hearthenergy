
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Merkabah(props) {
  const { nodes, materials, animations } = useGLTF('/models/Merkabah_LightBody.glb');
  const group = useRef()
  const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Solid007.geometry}
        material={materials['Material.003']}
        position={[0, -0.076, 0]}
        rotation={[Math.PI, Math.PI / 4, 2.588]}
        scale={80.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Solid008.geometry}
        material={materials['Material.004']}
        position={[0, -0.519, 0]}
        rotation={[Math.PI, -0.686, Math.PI]}
        scale={51.217}
      />
    </group>
  )
}

useGLTF.preload('/models/Merkabah_LightBody.glb');