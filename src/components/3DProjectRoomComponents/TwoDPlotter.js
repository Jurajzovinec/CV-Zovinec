import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import TwoDPlotterXCarriage from './TwoDPlotterXCarriage';

const TwoDPlotter = (props) => {

    const url = "2DPlotter-Base.gltf";

    const gltf = useRef(null);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    const [active, setActive] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useMemo(() => new GLTFLoader().load(url,
        (data) => {
            gltf.current = data;
            gltf.current.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.9;
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    return isMounted && modelLoaded ?
        (<group>
            <mesh
                {...props}
                onClick={() => {setActive(!active); props.setBlog()}}
                onPointerOver={() => props.lightUpItem(true)}
                onPointerOut={() => props.lightUpItem(false)}
            >
                <primitive object={gltf.current.scene} />
            </mesh>
            <TwoDPlotterXCarriage position={props.position} rotation={props.rotation} move={active} />
        </group>) : null;
}

export default TwoDPlotter;



