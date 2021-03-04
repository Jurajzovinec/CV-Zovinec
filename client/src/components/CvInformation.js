import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function CvInformation(props) {

    let mappedList = [];

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
    
    const [folded, setFolded] = useState(() => true);

    const changeFoldState = () => {
        setFolded(!folded);
    };

    return (
        <div className="cv-information-container">
            <ToggleButton toggleState={() => changeFoldState()} />
            <span>{props.name}</span>
            {!folded ?
                <ul>
                    {mappedList.map(nestedItem => {
                        return <CvInformation
                            name={nestedItem.name}
                            data={nestedItem.data}
                        />
                    })}
                </ul> : null
            }
        </div>
    )
}
