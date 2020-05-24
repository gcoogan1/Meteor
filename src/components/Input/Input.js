import React from 'react';
//Local Files
import style from './Input.module.css';
import MeteorIcon from '../../assets/icons-svg/meteor-icon.svg';


const Input = ({error, city, ...props}) => {
  
    return (
        <div className={style.search}>

          {/* Diplay of input and icon is changed once a card is shown */}
            <div className={(typeof city != "undefined") ? (style.show) : style.hide && (error === true) ? (style.show) : style.hide}>
              <img src={MeteorIcon} alt="meteor" onClick={() => window.location.reload()}/>
            </div>
            <input 
              {...props} 
              className={(typeof city != "undefined") ? (style.mini) : style.large && (error === true) ? (style.mini) : style.large}
            />  
        </div>
    )
}





export default Input;
