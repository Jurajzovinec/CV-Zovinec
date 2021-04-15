import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Portfolio = (props) => {

    const url = "Portfolio.gltf";

    const gltf = useRef(null);

    const [modelLoaded, setModelLoaded] = useState(false);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
      }, []);

    useMemo(() => new GLTFLoader().load(url,
        (data)=>{
            gltf.current=data;

            setModelLoaded(true);
        }), [url]);
        
    return isMounted && modelLoaded?
        (<mesh {...props} >
            <primitive object={gltf.current.scene} />
        </mesh>) : null;
}

export default Portfolio;


