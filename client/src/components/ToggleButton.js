import React from 'react';

export default function ToggleButton(props) {
    return (
        <div>
            <input type="checkbox" id="check-scale-options-button-id" onChange={props.toggleState} />
        </div>
    )
}
