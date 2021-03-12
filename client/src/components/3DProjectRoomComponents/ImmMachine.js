import React, { useState } from 'react';
import ImmMachinePart from './ImmMachinePart';

const ImmMachine = (props) => {
    
    const partsUrl = ["IMM-Alarm.gltf", "IMM-Base.gltf", "IMM-ControlDisplay.gltf", "IMM-Dispenser.gltf", "IMM-Injection.gltf", "IMM-Panneling.gltf"]
    const [expanded, setExpanded] = useState(false);
    
    return (
        <mesh
            {...props}
            onClick={() => setExpanded(!expanded)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            {partsUrl.map((eachPart) => <ImmMachinePart 
                key={eachPart} 
                position={props.position} 
                partUrl={eachPart} 
                expanded={expanded}/>)
            }
        </mesh>
    )

}

export default ImmMachine;



