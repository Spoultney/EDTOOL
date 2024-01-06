import React from "react";
import styles from '../outfitting.module.css';

const Outfitting = () => {
    return (
        <div className="Outfitting">
            <input type="text" placeholder="Reference System">Reference System</input>
            <input type="radio" placeholder="Landing Pad">Has Planet</input>
            <input type="text" placeholder="Arrival Distance">Distance of Arrival (ls)</input>
            <input type="text" placeholder="Has Resource">System/Planet has Resource</input>
        </div>
    )
}