import React from 'react';
import styles from '../header.module.css';
import logo from '../Resources/elite-logo.jpg'

const Logo = () => {
    return (
        <img className={styles.logo} src={logo} alt='' />
    );
};




const Header = () => {
    return (
        <div className={styles.header}>

            <h1 className={styles.header}>Elite Dangerous Multitool</h1>
            <p className={styles.header}>For all your sourcing needs</p>
        </div>
    )
};

export  {
    Header, 
    Logo
}
