import React, { useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from '@react-spring/three';
import TwoDPlotterYCarriage from './TwoDPlotterYCarriage';

const TwoDPlotterXCarriage = (props) => {

    const url = "2DPlotter-XCarriage.gltf";
    const [gltf, set] = useState(() => null);

    useMemo(() => new GLTFLoader().load(url, set), [url]);

    const animationProps = useSpring({
        position: props.move ? [props.position[0] + 0.17, (props.position[1]), props.position[2]] : [props.position[0] - 0.17, (props.position[1]), props.position[2]]
    });

    return gltf ?
        (<group>
            <a.mesh
                rotation={props.rotation}
                position={animationProps.position}
            >
                <primitive object={gltf.scene} />
            </a.mesh>
            <TwoDPlotterYCarriage
                position={props.position}
                rotation={props.rotation}
                move={props.move}
            />
        </group>) : null;
}

export default TwoDPlotterXCarriage;



