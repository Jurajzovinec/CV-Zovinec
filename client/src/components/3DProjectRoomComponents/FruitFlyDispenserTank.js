import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
};

const FruitFlyDispenserTank = (props) => {

    const url = "FruiFlyDispenser-Tank.gltf";
    const [gltf, set] = useState(() => null);
    const [changeDirection, setChangeDirection] = useState(() => false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    useInterval(() => {
        if (props.move === true) {
            setChangeDirection(!changeDirection);
        }
    }, 200);

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
        position: changeDirection ? [props.position[0], props.position[1] + 0.02, props.position[2]] : [props.position[0], props.position[1], props.position[2]]
    });

    return gltf ?
        (<a.mesh
            rotation={props.rotation}
            position={animationProps.position}
            scale={props.scale}
        >
            <primitive object={gltf.scene} />
        </a.mesh>) : null;
}

export default FruitFlyDispenserTank;



