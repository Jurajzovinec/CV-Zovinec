import React, { useState, useEffect, useRef } from 'react';
import technologiesToImproveIn from '../json/technologiesToImproveIn.json';

// Do not place mines close to each other
// position arrays are pushed into this array. This array is reference item which helps to determine possible collision of items.
let minesField = [];

const generateRandomNonCollidingPositions = (minesField) => {

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

    const positions = generateRandomNonCollidingPositions(minesField);

    const randomMultiplicatorX = (positions[0]).toString() + "%";
    const randomMultiplicatorY = (positions[1]).toString() + "%";
    const randomTimeOfShowingUp = Math.random() * 5000;

    const style = useRef({
        "position": "absolute",
        "overflow": "hidden",
        "top": randomMultiplicatorY,
        "left": randomMultiplicatorX
    });

    useEffect(() => {
        setTimeout(() => {
            setShowPTag(true);
        }, randomTimeOfShowingUp);
    }, [randomTimeOfShowingUp]);

    return (isShowPTag &&
        <p style={style.current}>{text}</p>
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
