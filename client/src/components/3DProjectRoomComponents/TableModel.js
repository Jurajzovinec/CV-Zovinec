import React, {  useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TableModel = (props) => {

    const url = "TableOfProjects.gltf";

    const [gltf, set] = useState(()=>null);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    useEffect(() => {
        if(gltf){
            gltf.scene.traverse((o) => {
                if (o.isMesh) {
                    o.material.metalness = 0.9;
                    o.material.roughness = 0;
                    o.receiveShadow=true;
                    o.castShadow=true;
                }});
        }  
    }, [gltf]);

    return gltf ?
        (<mesh {...props}>
            <primitive object={gltf.scene} />
        </mesh>) : null;
}
 
export default TableModel;
