import React, { useState, useEffect } from 'react';
import DrawingSlicer from '../json/DrawingSlicer.json';
import FruitFlyDispenser from '../json/FruitFlyDispenser.json';
import IMMMachineAssembly from '../json/IMMMachineAssembly.json';
import Portfolio from '../json/Portfolio.json';
import SurfShaper from '../json/SurfShaper.json';
import TwoDPlotter from '../json/TwoDPlotter.json';

const AboutTheProject = ({ project }) => {

    const [displayedProject, setDisplayedProject] = useState(null);

    useEffect(() => {
        switch (project) {
            case ('DrawingSlicer'):
                setDisplayedProject(DrawingSlicer);
                break;
            case ('SurfShaper'):
                setDisplayedProject(SurfShaper);
                break;
            case ('TwoDPlotter'):
                setDisplayedProject(TwoDPlotter);
                break;
            case ('IMMMachineAssembly'):
                setDisplayedProject(IMMMachineAssembly);
                break;
            case ('FruitFlyDispenser'):
                setDisplayedProject(FruitFlyDispenser);
                break;
            default:
                setDisplayedProject(Portfolio);
                break;
        }
    }, [project]);

    return (
        displayedProject &&
        (<div className="project-room--about-the-project-modal">
            <h1>{displayedProject.title}</h1>
            <h3>{displayedProject.natureOfTheProject}</h3>
            <h3>{displayedProject.aboutTheProject}</h3>
            <h3>Used technologies:</h3>
            {displayedProject.usedTechnologies.map(technology => {
                return <li key={technology} >{technology}</li>
            })}
            <h3>References:</h3>
            {Object.keys(displayedProject.references).map(link => {
                return <li key={link} >
                    <a href={displayedProject.references[link]} target="_blank">{link}</a>
                </li>
            })
            }

        </div>)
    );
}

export default AboutTheProject;