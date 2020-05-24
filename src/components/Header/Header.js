import React from 'react';
//Local Files
import style from './Header.module.css';
import MeteorIcon from '../../assets/icons-svg/meteor-icon.svg';


const Header = () => {
    return (
        <div className={style.header}>
            <div >
                <img src={MeteorIcon} alt="meteor" />
                <h1>METEOR</h1>
            </div>
            <h2>THE WEATHER APP</h2>
        </div>
    )
}

export default Header;
