import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const TableModel = (props) => {
    const url = "TableOfProjects.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
    (<mesh {...props}>
        <primitive object={gltf.scene}/>
    </mesh>) : null;
}

const FruitFlyDispenser = (props) => {
    const url = "FruitFlyDispenser.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
    (<mesh {...props}>
        <primitive object={gltf.scene}/>
    </mesh>) : null;
}

const SurfBoard = (props) => {
    const url = "SurfBoard.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
    (<mesh {...props}>
        <primitive object={gltf.scene}/>
    </mesh>) : null;
}

const DrawingSlicer = (props) => {
    const url = "DrawingSlicer.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
    (<mesh {...props}>
        <primitive object={gltf.scene}/>
    </mesh>) : null;
}

const TwoDPlotter = (props) => {
    const url = "2DPlotter.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(url, set), [url]);
    return gltf ?
    (<mesh {...props}>
        <primitive object={gltf.scene}/>
    </mesh>) : null;
}

export default function ProjectRoom() {
    return (
        <div className="technologies__technologies-canvas">
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 10], fov: 20 }}>
                <color attach="background" args={['#fff']} />
                <ambientLight intensity={0.4} />
                <Suspense fallback={null}>
                    <TableModel rotation={[-Math.PI / 2, 0, 0]} />
                    <FruitFlyDispenser rotation={[0, 0, 0]} position={[-0.65, 0.28, 0.2]} scale={[1.5, 1.5, 1.5]}/>
                    <TwoDPlotter rotation={[-Math.PI / 2, 0, 0]} position={[-0.3, 0.075, -0.23]}/>
                    <DrawingSlicer rotation={[-Math.PI / 2, 0, -Math.PI / 2]} position={[0.27, 0.14, -0.13]} scale={[1.5, 1.5, 1.5]}/>
                    <SurfBoard rotation={[-Math.PI / 2-Math.PI / 12, 0, Math.PI]} scale={[0.35, 0.35, 0.35]} position={[0.65, 0.7, -0.2]}/>
                </Suspense>
                <OrbitControls
                    enablePan={true}
                    target={[0, 0, 0]}
                    enableDamping={true}
                    // minPolarAngle={Math.PI / 2}
                    // maxPolarAngle={Math.PI / 2}
                    minDistance={3}
                    maxDistance={400}
                />
            </Canvas>
        </div>
    )
}
