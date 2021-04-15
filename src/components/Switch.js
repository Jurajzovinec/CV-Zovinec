import React from 'react';

const nextIcon = process.env.PUBLIC_URL + "/nextIcon.svg";

export default function Switch({ changeProject }) {
    return (
        <div className="switching-icons-container">
            <img src={nextIcon} className="switching-icons-container__left" onClick={() => changeProject('left')} />
            <img src={nextIcon} className="switching-icons-container__right" onClick={() => changeProject('right')} />
        </div>
    )
}

