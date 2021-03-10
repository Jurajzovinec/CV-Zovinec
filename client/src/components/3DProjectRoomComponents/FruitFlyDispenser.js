import React, { useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import FruitFlyDispenserTank from './FruitFlyDispenserTank';

const FruitFlyDispenser = (props) => {
    
    const url = "FruitFlyDispenser-Base.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

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

    return gltf ?
        <group>
            <mesh {...props}
                onClick={() => setActive(!active)}
                onPointerOver={() => props.lightUpItem(true)}
                onPointerOut={() => props.lightUpItem(false)}
            >
                <primitive object={gltf.scene} />
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
