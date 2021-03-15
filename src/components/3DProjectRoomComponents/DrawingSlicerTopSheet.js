import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from 'react-spring/three';

const DrawingSlicerTopSheet = (props) => {

    const url = "DrawingSlicer-SheetTop.gltf";
    const gltf = useRef(null);
    const [move, setMove] = useState(() => false);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (props.move === true) {
            setTimeout(() => {
                setMove(true);
            }, 2000);
        } else {
            setTimeout(setMove(false), 2000);
        }
    }, [props.move]);

    useMemo(() => new GLTFLoader().load(url,
        (data) => {
            gltf.current = data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    const animatedProps = useSpring({
        position: move ? [props.position[0], props.position[1] + 0.15, props.position[2]] : [props.position[0], props.position[1], props.position[2]],
        config: { mass: 10, friction: 100 }
    });


    return isMounted && modelLoaded ?
        (
            <a.mesh
                rotation={props.rotation}
                position={animatedProps.position}
                scale={props.scale}
            >
                <primitive object={gltf.current.scene} />
            </a.mesh>
        ) : null;
}

export default DrawingSlicerTopSheet;