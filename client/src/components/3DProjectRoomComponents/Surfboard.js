import React, { useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const Surfboard = (props) => {
    // Play with non symetric scaling
    const url = "SurfBoard.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    const animationProps = useSpring({
        scale: active ? [Math.random() + 0.5, Math.random(), props.scale[2]] : props.scale,
        position: active ? [props.position[0], (props.position[1]), props.position[2]] : props.position
    });

    return gltf ?
        (<a.mesh
            rotation={props.rotation}
            scale={animationProps.scale}
            position={animationProps.position}
            color={animationProps.color}
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            <primitive object={gltf.scene} />
        </a.mesh>) : null;
}

export default Surfboard;

