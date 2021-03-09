import React, { useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const TwoDPlotter = (props) => {
    // Move X carriage <--->
    const url = "2DPlotter.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    return gltf ?
        (<a.mesh
            {...props}
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            <primitive object={gltf.scene} />
        </a.mesh>) : null;
}

export default TwoDPlotter;



