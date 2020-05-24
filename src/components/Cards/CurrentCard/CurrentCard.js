import React from 'react';
//Local Files
import style from './CurrentCard.module.css';
import Clear from '../../../assets/icons-svg/Clear-Sky.svg';
import FewClouds from '../../../assets/icons-svg/Few-Clouds.svg';
import BrokenClouds from '../../../assets/icons-svg/Broken-Clouds.svg';
import ScatteredClouds from '../../../assets/icons-svg/Scattered-Clouds.svg';
import Mist from '../../../assets/icons-svg/Mist.svg';
import Rain from '../../../assets/icons-svg/Rain.svg';
import ShowerRain from '../../../assets/icons-svg/Shower-Rain.svg';
import Thunderstorm from '../../../assets/icons-svg/Thunderstorm.svg';
import Snow from '../../../assets/icons-svg/Snow.svg';
import {dateBuilder, toCapitalize} from '../../../Hoc/Functions/index';


const CurrentCard = ({name, temp, feelsLike, wind, main, icon, show }) => {


  //Icon Image Function (changes icon based on weather)
  //** see Open Weather App documentation for code ref
    let image = (i) => {
      if(i === "01d" || i === "01n"){
        return <img src={Clear} alt="clear"/>

      } else if(i === "02d" || i === "02n") {
        return <img src={FewClouds} alt="few-clouds"/>
     
      } else if(i === "03d" || i === "03n") {
        return <img src={ScatteredClouds} alt="scattered-clouds"/>
     
      } else if(i === "04d" || i === "04n") {
        return <img src={BrokenClouds} alt="broken-clouds"/>
     
      } else if(i === "09d" || i === "03n") {
        return <img src={ShowerRain} alt="shower"/>
     
      } else if(i === "10d" || i === "10n") {
        return <img src={Rain} alt="rain"/>
     
      } else if(i === "11d" || i === "11n") {
        return <img src={Thunderstorm} alt="thunder"/>
     
      } else if(i === "13d" || i === "13n") {
        return <img src={Snow} alt="snow"/>
    
      } else if(i === "50d" || i === "50n") {
        return <img src={Mist} alt="mist"/>
      } else {
        return null;
      }
    }

    return (
      <div className={style.wrapper}>
        <div className={style.city}>
          <div className={style.top}>
            <div>
              <div className={style.left}>
                <p>{main}</p>
                <h1>{Math.round(temp)}°</h1>
              </div>
              <div className={style.right}>
                {image(icon)}  
              </div>
            </div>
          </div>
          <div className={style.bottom}>
            <div>
              <h4>{toCapitalize(name)}</h4>
              <p>Feels like {Math.round(feelsLike)}°  <span> &#183; </span> Winds at {Math.round(wind)}mph</p> 
              <div>
                <p className={style.date}>{dateBuilder(new Date())}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}





export default CurrentCard;
