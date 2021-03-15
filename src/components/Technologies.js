import React, { useState, useEffect } from 'react';
import TechnologiesVisualization2D from './TechnologiesVisualization2D';

export default function Technologies(props) {

    const [expanded, setExpanded] = useState(() => false);

    const clickAction = () => {
        setExpanded(!expanded);
        if (props.collapseSectionsOnToggle) {
            props.collapseSectionsOnToggle('expandTechnologies');
        }
    };

    useEffect(() => {
        if(props.expand!==undefined){
            if(props.expand===false){
                setExpanded(false);
            }
        }
    }, [props.expand]);

    const determineClassName = () => {

        let className;
        switch (true) {
            case (expanded):
                className = "expandible-item-expanded";
                break;
            case (!expanded):
                className = "expandible-item-collapsed";
                break;
            default:
                className = "expandible-item-collapsed";
        }
        return className;
    };

    return (
        <div className="technologies" id="block-for-randomized-p-tags">
            <div
                className={determineClassName()}
                onClick={() => clickAction()}>
                <span>{props.name}</span>
            </div>
            {
                expanded && <TechnologiesVisualization2D appear={expanded} />
            }
        </div>
    )
}
