import React, {  useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ImmMachinePart = ({partUrl}) => {
    const [gltf, set] = useState(()=>null);
    useMemo(() => new GLTFLoader().load(partUrl, set), [partUrl]);
    return gltf ?
        (<primitive object={gltf.scene} />) : null;
}
 
export default ImmMachinePart;