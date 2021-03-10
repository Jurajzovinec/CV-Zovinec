import React, { useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';
import * as THREE from 'three';
import { ConvolutionMaterial } from '@react-three/drei/materials/ConvolutionMaterial';
import { MeshBasicMaterial } from 'three';

const Surfboard = (props) => {
    // Play with non symetric scaling
    const url = "SurfBoard.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    useEffect(() => {
        if(gltf){
            gltf.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.4;
                    o.material.roughness = 0.1;
                    o.castShadow=true;
                }});
        }  
    }, [gltf]);
        
    const animationProps = useSpring({
        scale: active ? [Math.random() + 0.5, Math.random(), props.scale[2]] : props.scale,
        position: active ? [props.position[0], (props.position[1]), props.position[2]] : props.position
    });

    return gltf ?
        (<a.mesh
            rotation={props.rotation}
            scale={animationProps.scale}
            position={animationProps.position}
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            <primitive object={gltf.scene} />
            <meshStandardMaterial attach="material" metalness={0.65} roughness={0} />
        </a.mesh>) : null;
}

export default Surfboard;

