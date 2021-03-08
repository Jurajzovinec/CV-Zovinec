import React, {useState} from 'react';
import TechnologiesVisualization from './TechnologiesVisualization';

export default function Technologies(props) {

    const [expanded, setExpanded] = useState(() => false);

    const clickAction = () => {
            setExpanded(!expanded);
    };


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
        <div className="technologies">
            <div
                className={determineClassName()}
                onClick={()=>clickAction()}>
                <span>{props.name}</span>
            </div>
            {
                expanded && <TechnologiesVisualization/>
            }
        </div>
    )
}
