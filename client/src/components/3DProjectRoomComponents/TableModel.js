import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TableModel = (props) => {

    const url = "TableOfProjects.gltf";

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
                    o.castShadow = true;
                    o.material.metalness = 0.5;
                    o.material.roughness = 0;
                }
            });
            setModelLoaded(true);
        }), [url]);
        
    return isMounted && modelLoaded?
        (<mesh {...props} >
            <primitive object={gltf.current.scene} />
        </mesh>) : null;
}

export default TableModel;
