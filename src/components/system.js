import React, {useState} from "react";
import styles from '../system.module.css';

const System = () => {
    return (
        <div className="systemSearchContainer">
            <input type="text" placeholder="Name of System" />
            <input type="text" placeholder="Planet" />
            <input type="text" placeholder="Arrival Distance" />
            <input type="text" placeholder="Has Resource" />
            <input type="submit" />
        </div>
    )
}

export default System;