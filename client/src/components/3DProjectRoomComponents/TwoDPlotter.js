import React, {  useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TwoDPlotter = (props) => {
    // Move X carriage <--->
    const url = "2DPlotter.gltf";
    const [gltf, set] = useState(()=>null);
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
        (<mesh {...props}>
            <primitive object={gltf.scene} />
        </mesh>) : null;
}
 
export default TwoDPlotter;



