import React, { useState, useRef } from 'react';

export default function CvInformation(props) {

    let mappedList = [];

    const [expanded, setExpanded] = useState(() => false);

    const [refURL, setRefURL] = useState(() => "");

    const isCollapsible = useRef(() => true);

    const isClickable = useRef(() => true);

    const clickAction = () => {
        setExpanded(!expanded);
    };

    if (props.data === null || props.data === undefined) {
        isCollapsible.current = false;
    }

    if (isCollapsible.current === false && refURL === "") {
        isClickable.current = false;
    }

    if (props.data) {
        if (Array.isArray(props.data)) {
            props.data.map(element => {
                mappedList.push({
                    name: element,
                    data: props.data[element]
                });
            });
        } else if ((typeof (props.data) === 'object')) {
            Object.keys(props.data).map((element) => {
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

        let className = "defaultClassName";
        switch (true) {
            case (isClickable.current && expanded):
                className = "expandible-item-expanded";
                break;
            case (isClickable.current && !expanded):
                className = "expandible-item-collapsed";
                break;
            case (refURL!==""):
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
                onClick={isClickable.current ? () => clickAction() : undefined}
            >
                <span>{props.name}</span>
            </div>


            {expanded ?
                <div className="cv-information-recursed-container">
                    {mappedList.map(nestedItem => {
                        return <CvInformation
                            name={nestedItem.name}
                            data={nestedItem.data}
                            key={nestedItem.name}
                        />
                    })}
                </div> : null
            }
        </div>
    )
}
