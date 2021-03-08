import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Text from './Text';
import technologiesToImproveIn from '../json/technologiesToImproveIn.json';

function TechnologiesVisualizationComponent() {

    const ref = useRef();
    useFrame(({ clock }) => (ref.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.1))
    let incrementingHeight = ((technologiesToImproveIn.TechnologiesToLearnOrImproveIn.length+1) * 4.2) / 2;
    return (
        <group ref={ref}>
            {
                technologiesToImproveIn.TechnologiesToLearnOrImproveIn.map((technology) => {
                    incrementingHeight -= 4.2;
                    return <Text
                        hAlign="center"
                        size={0.5}
                        position={[0, incrementingHeight, 0]}
                        children={technology.toUpperCase().replace(/ /g, "")}
                        key={Math.random()}
                    />
                })
            }
        </group>
    )
}


export default function TechnologiesVisualization() {
    return (
        <div className="technologies__technologies-canvas">
            <Canvas concurrent shadowMap camera={{ position: [0, 0, 140], fov: 20 }}>
                <color attach="background" args={['#3C5A32']} />
                <ambientLight intensity={0.4} />
                <Suspense fallback={null}>
                    <TechnologiesVisualizationComponent />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    target={[0, 0, 0]}
                    enableDamping={true}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    minDistance={3}
                    maxDistance={400}
                />
            </Canvas>
        </div>
    )
}
