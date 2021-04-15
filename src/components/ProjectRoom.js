import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ImmMachine from './3DProjectRoomComponents/ImmMachine';
import FruitFlyDispenser from './3DProjectRoomComponents/FruitFlyDispenser';
import Surfboard from './3DProjectRoomComponents/Surfboard';
import DrawingSlicer from './3DProjectRoomComponents/DrawingSlicer';
import TwoDPlotter from './3DProjectRoomComponents/TwoDPlotter';
import AboutTheProject from './AboutTheProject';
import Switch from './Switch';
import Portfolio from './3DProjectRoomComponents/Portfolio';

export default function ProjectRoom() {

    const [displayedProject, setDisplayedProject] = useState('Portfolio');

    const changeDisplayedProject = (direction) => {

        const projects = ['Portfolio', 'SurfShaper', 'DrawingSlicer', 'IMMMachineAssembly', 'FruitFlyDispenser', 'TwoDPlotter'];
        const currentProjectIndex = projects.findIndex(project => project === displayedProject);

        if (direction === 'right') {
            if (currentProjectIndex  === projects.length-1) {
                console.log(projects[0]);
                setDisplayedProject(projects[0]);
            } else {
                setDisplayedProject(projects[currentProjectIndex + 1]);
            }
        }

        if (direction === 'left') {
            if (currentProjectIndex === 0) {
                setDisplayedProject(projects.slice(-1)[0]);
            } else {
                setDisplayedProject(projects[currentProjectIndex - 1]);
            }
        }

    };

    const PortfolioProps = {
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    };

    const SurfboardProps = {
        rotation: [-Math.PI / 2 - Math.PI / 12, 0, Math.PI],
        scale: [0.20, 0.20, 0.20],
        position: [0, 0.20, 0],
    };

    const DrawingSlicerProps = {
        rotation: [-Math.PI / 2, 0, -Math.PI / 2],
        position: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
    };

    const ImmMachineProps = {
        rotation: [-Math.PI / 2, 0, Math.PI / 2],
        position: [-0.1, 0, -0.14],
        scale: [0.07, 0.07, 0.07],
        setBlog: () => setDisplayedProject('IMMMachineAssembly')
    };

    const FruitFlyDispenserProps = {
        rotation: [0, 0, 0],
        scale: [2, 2, 2],
        position: [+0.15, 0.2, 0.4],
    };

    const TwoDPlotterProps = {
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    };

    return (
        <div className="technologies__technologies-canvas">
            <Canvas
                concurrent
                shadowMap
                colorManagement
                camera={{ position: [2, 1.5, 4], fov: 10 }}
            >
                <ambientLight intensity={0.5} />

                <spotLight intensity={0.5} position={[0, 1, 3]} color={"white"} />
                <spotLight intensity={0.5} position={[0, 1, -3]} color={"white"} />
                <spotLight intensity={0.5} position={[-2, 1, 3]} color={"white"} />
                <spotLight intensity={0.2} position={[2, 1, 3]} />


                <Suspense fallback={null}>

                    {(displayedProject === 'Portfolio') && <Portfolio {...PortfolioProps} />}
                    {(displayedProject === 'SurfShaper') && <Surfboard {...SurfboardProps} />}
                    {(displayedProject === 'DrawingSlicer') && <DrawingSlicer {...DrawingSlicerProps} />}
                    {(displayedProject === 'IMMMachineAssembly') && <ImmMachine {...ImmMachineProps} />}
                    {(displayedProject === 'FruitFlyDispenser') && <FruitFlyDispenser {...FruitFlyDispenserProps} />}
                    {(displayedProject === 'TwoDPlotter') && <TwoDPlotter  {...TwoDPlotterProps} />}

                </Suspense>

                <OrbitControls
                    enablePan={false}
                    target={[0.3, 0, 0]}
                    enableDamping={true}
                    // minPolarAngle={Math.PI / 2}
                    // maxPolarAngle={Math.PI / 2}
                    minDistance={4}
                    maxDistance={5}
                />
            </Canvas>
            <AboutTheProject displayedProject={displayedProject} />
            <Switch changeProject={(direction) => changeDisplayedProject(direction)} />
        </div>
    )
}
