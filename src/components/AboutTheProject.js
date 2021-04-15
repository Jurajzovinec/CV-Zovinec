import React, { useState, useEffect } from 'react';
import DrawingSlicer from '../json/DrawingSlicer.json';
import FruitFlyDispenser from '../json/FruitFlyDispenser.json';
import IMMMachineAssembly from '../json/IMMMachineAssembly.json';
import Portfolio from '../json/Portfolio.json';
import SurfShaper from '../json/SurfShaper.json';
import TwoDPlotter from '../json/TwoDPlotter.json';

const AboutTheProject = ({ displayedProject }) => {

    const [displayedBlog, setDispleyedBlog] = useState(null);

    useEffect(() => {
        switch (displayedProject) {
            case ('DrawingSlicer'):
                setDispleyedBlog(DrawingSlicer);
                break;
            case ('SurfShaper'):
                setDispleyedBlog(SurfShaper);
                break;
            case ('TwoDPlotter'):
                setDispleyedBlog(TwoDPlotter);
                break;
            case ('IMMMachineAssembly'):
                setDispleyedBlog(IMMMachineAssembly);
                break;
            case ('FruitFlyDispenser'):
                setDispleyedBlog(FruitFlyDispenser);
                break;
            default:
                setDispleyedBlog(Portfolio);
                break;
        }
    }, [displayedProject]);

    return (
        displayedBlog &&
        (<div className="project-room--about-the-project-modal">
            <h1>{displayedBlog.title}</h1>
            <h3>{displayedBlog.natureOfTheProject}</h3>
            <h3>{displayedBlog.aboutTheProject}</h3>
            <h3>Used technologies:</h3>
            {displayedBlog.usedTechnologies.map(technology => {
                return <li key={technology} >{technology}</li>
            })}
            <h3>References:</h3>
            {Object.keys(displayedBlog.references).map(link => {
                return <li key={link} >
                    <a href={displayedBlog.references[link]} target="_blank">{link}</a>
                </li>
            })
            }

        </div>)
    );
}

export default AboutTheProject;