import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const useInterval = (callback, delay) => {
    
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
};

const FruitFlyDispenserTank = (props) => {

    const url = "FruiFlyDispenser-Tank.gltf";

    const gltf = useRef(null);
    
    const [changeDirection, setChangeDirection] = useState(() => false);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false);
      }, []);

      useMemo(() => new GLTFLoader().load(url,
        (data)=>{
            gltf.current=data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.65;
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    useInterval(() => {
        if (props.move === true) {
            setChangeDirection(!changeDirection);
        }
    }, 200);


    const animationProps = useSpring({
        position: changeDirection ? [props.position[0], props.position[1] + 0.02, props.position[2]] : [props.position[0], props.position[1], props.position[2]]
    });

    return isMounted && modelLoaded ?
        (<a.mesh
            rotation={props.rotation}
            position={animationProps.position}
            scale={props.scale}
        >
            <primitive object={gltf.current.scene} />
        </a.mesh>) : null;
}

export default FruitFlyDispenserTank;



