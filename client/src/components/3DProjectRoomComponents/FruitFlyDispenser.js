import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import FruitFlyDispenserTank from './FruitFlyDispenserTank';

const FruitFlyDispenser = (props) => {
    
    const url = "FruitFlyDispenser-Base.gltf";
    
    const gltf = useRef(null);
    
    const [active, setActive] = useState(false);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
      }, []);

    useMemo(() => new GLTFLoader().load(url,
        (data)=>{
            gltf.current=data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.35;
                    o.material.roughness = 0;
                    o.receiveShadow = true;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    return isMounted && modelLoaded ?
        <group>
            <mesh {...props}
                onClick={() => setActive(!active)}
                onPointerOver={() => props.lightUpItem(true)}
                onPointerOut={() => props.lightUpItem(false)}
            >
                <primitive object={gltf.current.scene} />
            </mesh>
            <FruitFlyDispenserTank 
                position={props.position}
                rotation={props.rotation}
                scale={props.scale}
                move={active}
            />
        </group> : null;
}

export default FruitFlyDispenser;
