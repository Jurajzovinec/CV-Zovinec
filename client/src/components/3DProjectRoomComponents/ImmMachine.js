import React, {  useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ImmMachinePart = (partUrl) => {
    const [gltf, set] = useState(()=>null);
    useMemo(() => new GLTFLoader().load(partUrl, set), [partUrl]);
    return gltf ?
        (<primitive object={gltf.scene} />) : null;
}


const ImmMachine = (props) => {
    // Assemble models together, Start with base
    const partsUrl = ["IMM-Alarm.gltf", "IMM-Base.gltf", "IMM-ControlDisplay.gltf", "IMM-Dispenser.gltf", "IMM-Injection.gltf", "IMM-Panneling.gltf"]
    return (
        <mesh {...props}>
            {partsUrl.map((eachPart)=>ImmMachinePart(eachPart))}
        </mesh>
    )

}
 
export default ImmMachine;



