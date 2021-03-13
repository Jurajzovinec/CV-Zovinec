import React, { useMemo, useEffect, useRef, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const ImmMachinePart = ({ partUrl, position, expanded }) => {

    const gltf = useRef(null);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
      }, []);

    useMemo(() => new GLTFLoader().load(partUrl,
        (data)=>{
            gltf.current=data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.1;
                    o.material.roughness = 0.5;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [partUrl]);

    const animationProps = useSpring({
        position: expanded && (partUrl !== "IMM-Base.gltf") ? [position[0] + Math.random(), position[1] + Math.random(), position[2] + Math.random() * 2] : position
    });

    return isMounted && modelLoaded ?
        (<a.mesh
            position={animationProps.position}
        >
            <primitive object={gltf.current.scene} />
        </a.mesh>) : null;
}

export default ImmMachinePart;