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
        setLightIntensity(3);
    }, [light, scene]);

    const basePropsObject = {
        ref: light,
        intensity: lightIntensity,
        angle: Math.PI / 20,
        distance: 2.5,
        decay: 0,


    };

    const emitPositionLight1 = [position[0], position[1] + 1, position[2]];

    return (
        obj && light && scene ?
            <spotLight
                {...basePropsObject}
                position={emitPositionLight1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                castShadow
            >
                <object3D ref={obj} position={position} />
            </spotLight> : null

    );
}

export default TargetedSpotlight;