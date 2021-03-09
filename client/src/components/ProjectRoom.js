import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ImmMachine from './3DProjectRoomComponents/ImmMachine';
import TableModel from './3DProjectRoomComponents/TableModel';
import FruitFlyDispenser from './3DProjectRoomComponents/FruitFlyDispenser';
import Surfboard from './3DProjectRoomComponents/Surfboard';
import DrawingSlicer from './3DProjectRoomComponents/DrawingSlicer';
import TwoDPlotter from './3DProjectRoomComponents/TwoDPlotter';


export default function ProjectRoom() {

    const [lightSurfboard, setLightSurfboard] = useState(false);

    const SurfboardProps = {
        rotation: [-Math.PI / 2 - Math.PI / 12, 0, Math.PI],
        scale: [0.35, 0.35, 0.35],
        position: [0.71, 0.66, -0.2],
        lightUpItem: ((value) => setLightSurfboard(value))
    };


    return (
        <div className="technologies__technologies-canvas">
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 10], fov: 20 }}>
                <color attach="background" args={['#fff']} />
                <ambientLight intensity={0.03} />
                {/*
                <spotLight intensity={0.1} position={[0, 1, 3]} castShadow />
                <spotLight intensity={0.2} position={[0, 1, -3]} castShadow />
                <spotLight intensity={0.1} position={[-2, 1, 3]} castShadow />
                <spotLight intensity={0.1} position={[2, 1, 3]} castShadow />
                */}
                

                {/*lightSurfboard ? (<pointLight intensity={0.58} position={[0.71, 2, -0.2]} castShadow />) : null*/}
                {lightSurfboard ? 
                    <pointLight
                        intensity={1}
                        position={[0, 0, 0]}
                        // target={[0.71, 0.66, 0]}
                    /> : null}

                <Suspense fallback={null}>
                    <TableModel rotation={[-Math.PI / 2, 0, 0]} />

                    <FruitFlyDispenser rotation={[0, 0, 0]} position={[-0.65, 0.28, 0.2]} scale={[1.5, 1.5, 1.5]} />
                    <TwoDPlotter rotation={[-Math.PI / 2, 0, 0]} position={[-0.40, 0.057, -0.23]} />

                    <ImmMachine rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.07, 0.07, 0.07]} position={[0, 0.17, -0.14]} />

                    <DrawingSlicer rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0.41, 0.14, -0.09]} scale={[1.5, 1.5, 1.5]} />
                    <Surfboard {...SurfboardProps} />

                </Suspense>
                <OrbitControls
                    enablePan={true}
                    target={[0, 0, 0]}
                    enableDamping={true}
                // minPolarAngle={Math.PI / 2}
                // maxPolarAngle={Math.PI / 2}
                // minDistance={3}
                // maxDistance={400}
                />
            </Canvas>
        </div>
    )
}



//rotation={[-Math.PI / 2 - Math.PI / 12, 0, Math.PI]} scale={[0.35, 0.35, 0.35]} position={[0.71, 0.66, -0.2]}
//distance={2}
//decay={1}