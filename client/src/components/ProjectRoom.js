import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls} from '@react-three/drei';
import ImmMachine from './3DProjectRoomComponents/ImmMachine';
import TableModel from './3DProjectRoomComponents/TableModel';
import FruitFlyDispenser from './3DProjectRoomComponents/FruitFlyDispenser';
import Surfboard from './3DProjectRoomComponents/Surfboard';
import DrawingSlicer from './3DProjectRoomComponents/DrawingSlicer';
import TwoDPlotter from './3DProjectRoomComponents/TwoDPlotter';
import TargetedSpotlight from './3DProjectRoomComponents/TargetedSpotlight';
import GrounPlane from './3DProjectRoomComponents/GroundPlane';

export default function ProjectRoom() {

    const [lightFruitFlyDispenser, setLightFruitFlyDispenser] = useState(false);
    const [lightTwoDPlotter, setLightTwoDPlotter] = useState(false);
    const [lightImmMachine, setLightImmMachine] = useState(false);
    const [lightDrawingSlicer, setLightDrawingSlicer] = useState(false);
    const [lightSurfboard, setLightSurfboard] = useState(false);

    const FruitFlyDispenserProps = {
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
        position: [-0.65, 0.28, 0.2],
        lightUpItem: ((value) => setLightFruitFlyDispenser(value))
    };

    const TwoDPlotterProps = {
        rotation: [-Math.PI / 2, 0, 0],
        position: [-0.40, 0.057, -0.23],
        lightUpItem: ((value) => setLightTwoDPlotter(value))
    };

    const ImmMachineProps = {
        rotation: [-Math.PI / 2, 0, Math.PI / 2],
        position: [0, 0.17, -0.14],
        scale: [0.07, 0.07, 0.07],
        lightUpItem: ((value) => setLightImmMachine(value))
    };

    const DrawingSlicerProps = {
        rotation: [-Math.PI / 2, 0, -Math.PI / 2],
        position: [0.41, 0.14, -0.15],
        scale: [1.5, 1.5, 1.5],
        lightUpItem: ((value) => setLightDrawingSlicer(value))
    };

    const SurfboardProps = {
        rotation: [-Math.PI / 2 - Math.PI / 12, 0, Math.PI],
        scale: [0.35, 0.35, 0.35],
        position: [0.71, 0.66, -0.2],
        lightUpItem: ((value) => setLightSurfboard(value))
    };

    return (
        <div className="technologies__technologies-canvas">
            <Canvas concurrent shadowMap colorManagement camera={{ position: [0, 0, 10], fov: 20 }}>
                
                <ambientLight intensity={0.5} />

                <spotLight intensity={0.5} position={[0, 1, 3]} color={"white"}/>
                <spotLight intensity={0.5} position={[0, 1, -3]} color={"white"}/>


                <spotLight intensity={0.5} position={[-2, 1, 3]} color={"white"}/>
                <spotLight intensity={0.2} position={[2, 1, 3]} />


                {lightSurfboard ? <TargetedSpotlight position={[0.71, 0.8, 0]} /> : null}
                {lightFruitFlyDispenser ? <TargetedSpotlight position={[-0.80, 0.45, -0.0]} /> : null}
                {lightTwoDPlotter ? <TargetedSpotlight position={[-0.40, 0.8, -0.12]} /> : null}
                {lightImmMachine ? <TargetedSpotlight position={[0, 0.8, -0.25]} /> : null}
                {lightDrawingSlicer ? <TargetedSpotlight position={[0.33, 0.14, -0.16]} /> : null}

                <Suspense fallback={null}>

                    <GrounPlane />

                    <TableModel rotation={[-Math.PI / 2, 0, 0]} />

                    <FruitFlyDispenser {...FruitFlyDispenserProps} />

                    <TwoDPlotter  {...TwoDPlotterProps} />

                    <ImmMachine {...ImmMachineProps} />

                    <DrawingSlicer {...DrawingSlicerProps} />

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
