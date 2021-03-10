import React, { useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';
import TwoDPlotterXCarriage from './TwoDPlotterXCarriage';

const TwoDPlotter = (props) => {
    
    const url = "2DPlotter-Base.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    return gltf ?
        <group>
            <mesh
                {...props}
                onClick={() => setActive(!active)}
                onPointerOver={() => props.lightUpItem(true)}
                onPointerOut={() => props.lightUpItem(false)}
            >
                <primitive object={gltf.scene} />
            </mesh>
            <TwoDPlotterXCarriage position={props.position} rotation={props.rotation} move={active}/>
        </group> : null;
}

export default TwoDPlotter;



