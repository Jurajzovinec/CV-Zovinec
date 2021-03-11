import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import Text from './Text';
import technologiesToImproveIn from '../json/technologiesToImproveIn.json';

// Do not place mines close to each other
let minesField = [];

const generateRandomNonCollidingPosition = (minesField) => {
    // console.log(minesField);

    let keepOnSearching = true;
    let generatedField;

    while (keepOnSearching) {

        generatedField = [(Math.random() * 80 + 5), (Math.random() * 90 + 5)];

        let breakLoop = true;

        minesField.forEach((field) => {
            if ((Math.max(field[0], generatedField[0]) - Math.min(field[0], generatedField[0]) < 10) &&
                (Math.max(field[1], generatedField[1]) - Math.min(field[1], generatedField[1]) < 4)) {
                breakLoop = false;
            }
        });

        if (breakLoop || (minesField.length === 0)) {
            keepOnSearching = false;
        }

    }

    minesField.push(generatedField);
    return generatedField;

};

const TechnologiesVisualizationComponent = ({ text }) => {

    const [isShowPTag, setShowPTag] = useState(() => false);

    const positions = generateRandomNonCollidingPosition(minesField);

    const randomMultiplicatorX = (positions[0]).toString() + "%";
    const randomMultiplicatorY = (positions[1]).toString() + "%";
    const randomTimeOfShowingUp = Math.random() * 5000;

    const [style, setStyle] = useState(() => {
        return {
            "position": "absolute",
            "overflow": "hidden",
            "top": randomMultiplicatorY,
            "left": randomMultiplicatorX
        };
    });

    useEffect(() => {
        setTimeout(() => {
            setShowPTag(true);
        }, randomTimeOfShowingUp);
    },
        []);

    return (isShowPTag &&
        <p style={style}>{text}</p>
    )

};

export default function TechnologiesVisualization2D() {
    minesField = [];
    return (
        <div className="technologies__technologies-canvas" id="tech">
            {technologiesToImproveIn.TechnologiesToLearnOrImproveIn.map(technology => {
                return (
                    <TechnologiesVisualizationComponent
                        key={technology}
                        text={technology}
                    />
                )

            })}
        </div>
    )
}
