import React, { useMemo, useState } from 'react';
import ImmMachinePart from './ImmMachinePart';
import { useSpring, a } from '@react-spring/three';

const ImmMachine = (props) => {
    // Assemble models together, Start with base
    const partsUrl = ["IMM-Alarm.gltf", "IMM-Base.gltf", "IMM-ControlDisplay.gltf", "IMM-Dispenser.gltf", "IMM-Injection.gltf", "IMM-Panneling.gltf"]
    const [active, setActive] = useState(false);
    return (
        <a.mesh
            {...props}
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            {partsUrl.map((eachPart) => <ImmMachinePart key={eachPart} partUrl={eachPart} />)}
        </a.mesh>
    )

}

export default ImmMachine;



