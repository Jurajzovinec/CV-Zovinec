import React, { useRef, useEffect, useState } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { Object3D } from 'three';
extend({ Object3D });

const TargetedSpotlight = ({ position }) => {

    const obj = useRef();
    const { scene } = useThree();
    const light = useRef();
    const [lightIntensity, setLightIntensity] = useState(0);

    useEffect(() => {
        scene.add(light.current.target);
        scene.add(obj.current);
        light.current.target = obj.current;
        setLightIntensity(5);
    }, [light, scene]);

    const basePropsObject = {
        ref: light,
        intensity: lightIntensity,
        angle: Math.PI / 20,
        //distance: 2.5,
        //decay: 5,
    };

    const emitPositionLight1 = [position[0], position[1] + 1, position[2]];

    return (
        obj && light && scene ?
            <spotLight
                {...basePropsObject}
                position={emitPositionLight1}
                castShadow
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
            >
                <object3D ref={obj} position={position} />
            </spotLight> : null

    );
}

export default TargetedSpotlight;