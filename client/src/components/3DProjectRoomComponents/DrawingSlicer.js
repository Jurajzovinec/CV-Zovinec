import React, { useMemo, useState } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import DrawingSlicerBottomSheet from './DrawingSlicerBottomSheet';
import DrawingSlicerTopSheet from './DrawingSlicerTopSheet';
import DrawingSlicerScissors from './DrawingSlicerScissors';

const DrawingSlicer = (props) => {

    // - scissors do one revolution -> after top sheet is moved up nad rotated, in the meantime A2 is changed to A3s

    const url = "DrawingSlicer.gltf";
    const [gltf, set] = useState(() => null);
    const [active, setActive] = useState(false);

    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
        (<group
            onClick={() => setActive(!active)}
            onPointerOver={() => props.lightUpItem(true)}
            onPointerOut={() => props.lightUpItem(false)}
        >
            <DrawingSlicerBottomSheet

                move={active}
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}

            />
            <DrawingSlicerTopSheet

                move={active}
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}

            />
            <DrawingSlicerScissors

                move={active}
                rotation={props.rotation}
                position={props.position}
                scale={props.scale}

            />
        </group>) : null;
}

export default DrawingSlicer;

