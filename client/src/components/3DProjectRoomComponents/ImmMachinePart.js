import React, { useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const ImmMachinePart = ({ partUrl, position, expanded }) => {

    const [gltf, set] = useState(() => null);

    useMemo(() => new GLTFLoader().load(partUrl, set), [partUrl]);

    useEffect(() => {
        if(gltf){
            gltf.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.65;
                    o.material.roughness = 0;
                    o.castShadow=true;
                }});
        }  
    }, [gltf]);

    const animationProps = useSpring({
        position: expanded && (partUrl !== "IMM-Base.gltf") ? [position[0] + Math.random(), position[1] + Math.random(), position[2] + Math.random() * 2] : position
    });

    return gltf ?
        <a.mesh
            position={animationProps.position}
        >
            <primitive object={gltf.scene} />
        </a.mesh> : null;
}

export default ImmMachinePart;