import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DrawingSlicerBottomSheet = (props) => {

    const url = "DrawingSlicer-SheetBottom.gltf";
    
    const gltf = useRef(null);
    
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
                    o.material.roughness = 0;
                    o.castShadow = true;
                }
            });
            setModelLoaded(true);
        }), [url]);

    return isMounted && modelLoaded ?
        (
            <mesh
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}
            >
                <primitive object={gltf.current.scene} />
            </mesh>
        ) : null;
}

export default DrawingSlicerBottomSheet;