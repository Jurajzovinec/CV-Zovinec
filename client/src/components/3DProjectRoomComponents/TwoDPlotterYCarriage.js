import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const TwoDPlotterYCarriage = (props) => {

    const url = "2DPlotter-YCarriage.gltf";

    const gltf = useRef(null);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false);
    }, []);

    useMemo(() => new GLTFLoader().load(url,
        (data) => {
            gltf.current = data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.5;
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    const animationProps = useSpring({
        position: props.move ? [props.position[0] + 0.17, props.position[1], props.position[2] + 0.14] : [props.position[0] - 0.17, props.position[1], props.position[2]],
        config: { mass: 10, friction: 300 }
    });
    return isMounted && modelLoaded ?
        (<a.mesh
            rotation={props.rotation}
            position={animationProps.position}
        >
            <primitive object={gltf.current.scene} />
        </a.mesh>) : null;
}

export default TwoDPlotterYCarriage;



