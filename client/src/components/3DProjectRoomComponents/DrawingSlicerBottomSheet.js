import React, { useMemo, useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const DrawingSlicerBottomSheet = (props) => {

    const url = "DrawingSlicer-SheetBottom.gltf";
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

    return gltf ?
        (
            <mesh
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}
            >
                <primitive object={gltf.scene} />
            </mesh>
        ) : null;
}

export default DrawingSlicerBottomSheet;