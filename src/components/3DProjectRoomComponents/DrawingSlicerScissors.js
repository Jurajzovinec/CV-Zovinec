import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from 'react-spring/three';

const DrawingSlicerScissors = (props) => {

    const url = "DrawingSlicerScissors.gltf";
    const gltf = useRef(null);
    const [spin, setSpin] = useState(() => false);
    const [move, setMove] = useState(() => false);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false);
      }, []);

    useEffect(() => {
        if (props.move === true) {    
            setSpin(true);
            setTimeout(() => {
                setMove(true);
            }, 2000);
        } else {
            setSpin(false);
            setTimeout(setMove(false), 2000);
        }
    }, [props.move]);

    useMemo(() => new GLTFLoader().load(url,
        (data)=>{
            gltf.current=data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.5;
                    o.material.roughness = 0;
                    o.receiveShadow = true;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    const animatedProps = useSpring({
        rotation: spin ? [props.rotation[0], -Math.PI, props.rotation[2]] : props.rotation,
        position: move ? [props.position[0]+0.1, props.position[1]+0.20, props.position[2] ] : [props.position[0]-0.1, props.position[1]+0.20, props.position[2]],
        config: { mass: 10, friction: 100 }
    });

    return isMounted && modelLoaded ?
        (
            <a.mesh
                rotation={animatedProps.rotation}
                position={animatedProps.position}
                scale={props.scale}
            >
                <primitive object={gltf.current.scene} />
            </a.mesh>
        ) : null;
}

export default DrawingSlicerScissors;