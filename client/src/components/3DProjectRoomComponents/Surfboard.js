import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const Surfboard = (props) => {
    // Play with non symetric scaling
    const url = "SurfBoard.gltf";
    
    const gltf = useRef(null);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    const [active, setActive] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false);
      }, []);

    useMemo(() => new GLTFLoader().load(url,
        (data)=>{
            gltf.current=data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.8;
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);
        
    const animationProps = useSpring({
        scale: active ? [Math.random() + 0.5, Math.random(), props.scale[2]] : props.scale,
        position: active ? [props.position[0], (props.position[1]), props.position[2]] : props.position
    });

    return isMounted && modelLoaded ?
        (<a.mesh
            rotation={props.rotation}
            scale={animationProps.scale}
            position={animationProps.position}
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            <primitive object={gltf.current.scene} />
            <meshStandardMaterial attach="material" metalness={0.65} roughness={0} />
        </a.mesh>) : null;
}

export default Surfboard;

