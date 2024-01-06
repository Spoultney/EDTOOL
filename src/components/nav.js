import React, {useState} from 'react';
import styles from '../nav.module.css';





const Menu = (props) => {
    
    return (
        <div id='Menu' className={styles.MenuButton}>
            <ul>
                <li className='System' onSystemClick={props.onSystemClick}>System</li>
                <li className='Button2'>Station</li>
                <li className='Button3'>Commodity</li>
                <li className='Button4'>Components</li>
                <li className='Button5'>Engineering</li>
                <li className='Button6'>Outfitting</li>
            </ul>
        </div>)
}

export default Menu;