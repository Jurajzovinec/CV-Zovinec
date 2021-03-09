import React, {  useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TableModel = (props) => {
    const url = "TableOfProjects.gltf";
    const [gltf, set] = useState(()=>null);
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
        (<mesh {...props}>
            <primitive object={gltf.scene} />
        </mesh>) : null;
}
 
export default TableModel;
