import React from 'react';
//Local Files
import style from './CitiesCard.module.css';
import {toCapitalize} from '../../../Hoc/Functions/index';


const CitiesCard = ({name, temp, weather, onClick}) => {

    //Change Card Background 
    let change;
    if(name === "Paris"){
      change = style.paris
    }else if (name === "London"){
      change =style.london
    }else if(name === "New York") {
      change = style.newyork
    }else if(name === "New Delhi") {
      change = style.newdelhi
    }else if(name === "Sydney") {
      change = style.sydney 
    }else {
      return null;
    } 


    return (
      <div  className={style.card} id={change} onClick={onClick} >
        <div className={style.text}>
          <div className={style.top}>
            <h4>{toCapitalize(name)}</h4>
            <h4 className={style.degree}>{Math.round(temp)}°</h4>
          </div>
          <div className={style.bottom}>
            <p>{weather}</p>
          </div>
        </div>
      </div>
    )
}

export default CitiesCard;
