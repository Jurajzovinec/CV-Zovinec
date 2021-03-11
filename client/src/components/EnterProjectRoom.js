import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectRoom from './ProjectRoom';

export default function EnterProjectRoom(props) {

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
        <div className="enter-project-room">
            <div
                className={determineClassName()}
                onClick={() => clickAction()}>
                <span>{props.name}</span>
            </div>
            {
                expanded &&
                <div className="enter-the-project-room__button-container">
                    <button className="button-container__enter-button">
                        <Link to="/projectRoom" style={{ color: 'inherit', textDecoration: 'inherit'}}>Enter the room</Link>
                    </button>
                </div>
            }
        </div>
    )
}
