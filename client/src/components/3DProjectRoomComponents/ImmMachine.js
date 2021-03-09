import React, {  useMemo, useState } from 'react';
import ImmMachinePart from './ImmMachinePart';

const ImmMachine = (props) => {
    // Assemble models together, Start with base
    const partsUrl = ["IMM-Alarm.gltf", "IMM-Base.gltf", "IMM-ControlDisplay.gltf", "IMM-Dispenser.gltf", "IMM-Injection.gltf", "IMM-Panneling.gltf"]
    return (
        <mesh {...props}>
            {partsUrl.map((eachPart)=> <ImmMachine key={eachPart} partUrl={eachPart}/>)}
        </mesh>
    )

}
 
export default ImmMachine;



