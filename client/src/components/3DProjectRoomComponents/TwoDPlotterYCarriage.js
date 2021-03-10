import React, { useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const TwoDPlotterYCarriage = (props) => {

    const url = "2DPlotter-YCarriage.gltf";
    const [gltf, set] = useState(() => null);

    useMemo(() => new GLTFLoader().load(url, set), [url]);
   
    const animationProps = useSpring({
        position: props.move ? [props.position[0]+0.17, props.position[1], props.position[2]+0.14] : [props.position[0]-0.17, props.position[1], props.position[2]]
    });

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
        (<a.mesh
            rotation={props.rotation}
            position={animationProps.position}
        >
            <primitive object={gltf.scene} />
        </a.mesh>) : null;
}

export default TwoDPlotterYCarriage;



