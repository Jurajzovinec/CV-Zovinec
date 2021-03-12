import React, { useState, useEffect } from 'react';
import DrawingSlicerBottomSheet from './DrawingSlicerBottomSheet';
import DrawingSlicerTopSheet from './DrawingSlicerTopSheet';
import DrawingSlicerScissors from './DrawingSlicerScissors';

const DrawingSlicer = (props) => {

    // - scissors do one revolution -> after top sheet is moved up nad rotated, in the meantime A2 is changed to A3s

    const [active, setActive] = useState(false);

    return (
        <group
            onClick={() => {setActive(!active); props.setBlog()}}
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
        </group>
    )
}

export default DrawingSlicer;

