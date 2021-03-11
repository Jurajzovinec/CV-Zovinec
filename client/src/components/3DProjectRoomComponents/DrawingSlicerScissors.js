import React, { useMemo, useState, useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';

const DrawingSlicerScissors = (props) => {

    const url = "DrawingSlicerScissors.gltf";
    const [gltf, set] = useState(() => null);
    const [spin, setSpin] = useState(() => false);
    const [move, setMove] = useState(() => false);

    useEffect(() => {
        if (props.move === true) {
            
            setSpin(true);
            console.log("Moving");
            setTimeout(() => {
                setMove(true);
            }, 2000);
        } else {
            setSpin(false);
            console.log("Default");
            setTimeout(setMove(false), 2000);
        }
    }, [props.move]);


    useMemo(() => new GLTFLoader().load(url, set), [url]);

    const animatedProps = useSpring({
        rotation: spin ? [props.rotation[0], -Math.PI, props.rotation[2]] : props.rotation,
        position: move ? [props.position[0]+0.1, props.position[1]+0.20, props.position[2] ] : [props.position[0]-0.1, props.position[1]+0.20, props.position[2]],
        config: { mass: 10, friction: 100 }
    });


    return gltf ?
        (
            <a.mesh
                rotation={animatedProps.rotation}
                position={animatedProps.position}
                scale={props.scale}
            >
                <primitive object={gltf.scene} />
            </a.mesh>
        ) : null;
}

export default DrawingSlicerScissors;
//rotateOnAxis={[1,1,1],(THREE.Math.degToRad(720))}