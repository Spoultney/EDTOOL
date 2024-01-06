import React from "react";
import styles from './station.module.css';

const Station = () => {
    return (
        <div className="systemSearchContainer">
            <input type="text" placeholder="Near System">Reference System</input> 
            <input type="text" placeholder="Name of Station">Name Of Station</input>
            <input type="text" placeholder="Station Size">Minimum landing pad</input>
            <input type="text" placeholder="Arrival Distance">Distance of Arrival (ls)</input>
            <input type="text" placeholder="Sells Ship">Station has Resource</input>
            <input type="text" placeholder="Sells Module">Station sells Module</input>
            <input type="radio" placeholder="Material Trader">Station has Material Trader</input>
            <input type="radio" placeholder="Interstellar Factors">Station has Interstellar Factors</input>
            <input type="submit">Submit</input>
        </div>
    )
}

export default Station;