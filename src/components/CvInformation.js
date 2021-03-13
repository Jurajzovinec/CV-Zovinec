import React, { useState, useRef } from 'react';
import snippets from '..//json/snippets.json';

export default function CvInformation(props) {

    let mappedList = [];

    const assignSnippets = () => {
        if (Object.keys(snippets.snippets).includes(props.name)) {
            return snippets.snippets[props.name];
        } else {
            return "";
        }
    };

    const navigateToRef = (URL) => {
        const win = window.open(URL, '_blank');
        win.focus();
    };

    const [expanded, setExpanded] = useState(() => false);

    const refURL = useRef(assignSnippets());

    const isClickable = useRef(false);

    const clickAction = () => {

        if (refURL.current !== "") {
            navigateToRef(refURL.current);
        } else {
            setExpanded(!expanded);
        }
    };

    if (refURL.current !== "" || (props.data !== undefined && props.data !== null)) {
        isClickable.current = true;
    }

    if (props.data) {
        if (Array.isArray(props.data)) {
            props.data.forEach(element => {
                mappedList.push({
                    name: element,
                    data: props.data[element]
                });
                return;
            });
        } else if ((typeof (props.data) === 'object')) {
            Object.keys(props.data).forEach((element) => {
                mappedList.push({
                    name: element,
                    data: props.data[element]
                });
            });
        } else {
            mappedList.push({
                name: props.data,
                data: null
            });
        }
    }

    const determineClassName = () => {

        let className;
        switch (true) {
            case (isClickable.current && expanded && refURL.current === ""):
                className = "expandible-item-expanded";
                break;
            case (isClickable.current && !expanded && refURL.current === ""):
                className = "expandible-item-collapsed";
                break;
            case (refURL.current !== ""):
                className = "reference-item";
                break;
            default:
                className = "deaf-item";
        }
        return className;
    };

    return (
        <div className="cv-information-container">

            <div
                className={determineClassName()}
                onClick={isClickable.current ? () => clickAction() : undefined}>
                <span>{props.name}</span>
            </div>

            {expanded ? <div>
                    {mappedList.map(nestedItem => {
                        return (<CvInformation
                            name={nestedItem.name}
                            data={nestedItem.data}
                            key={nestedItem.name}
                        />)
                    })}
                </div> : null}
        
        </div>
    )
}
