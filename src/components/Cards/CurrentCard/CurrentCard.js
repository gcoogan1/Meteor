import React from "react";
//Local Files
import style from "./CurrentCard.module.css";
/* import Clear from "../../../assets/icons-svg/Clear-Sky.svg";
import FewClouds from "../../../assets/icons-svg/Few-Clouds.svg";
import BrokenClouds from "../../../assets/icons-svg/Broken-Clouds.svg";
import ScatteredClouds from "../../../assets/icons-svg/Scattered-Clouds.svg";
import Mist from "../../../assets/icons-svg/Mist.svg";
import Rain from "../../../assets/icons-svg/Rain.svg";
import ShowerRain from "../../../assets/icons-svg/Shower-Rain.svg";
import Thunderstorm from "../../../assets/icons-svg/Thunderstorm.svg";
import Snow from "../../../assets/icons-svg/Snow.svg"; */
import { dateBuilder, toCapitalize } from "../../../Hoc/Functions/index";

const CurrentCard = ({
  name,
  temp,
  feelsLike,
  wind,
  main,
  icon,
  show
}) => {
  //Icon Image Function (changes icon based on weather)
  //** see Open Weather App documentation for code ref
  /*  let image = i => {
    if (i === "01d" || i === "01n") {
      return <img src={Clear} alt="clear" />;
    } else if (i === "02d" || i === "02n") {
      return <img src={FewClouds} alt="few-clouds" />;
    } else if (i === "03d" || i === "03n") {
      return <img src={ScatteredClouds} alt="scattered-clouds" />;
    } else if (i === "04d" || i === "04n") {
      return <img src={BrokenClouds} alt="broken-clouds" />;
    } else if (i === "09d" || i === "03n") {
      return <img src={ShowerRain} alt="shower" />;
    } else if (i === "10d" || i === "10n") {
      return <img src={Rain} alt="rain" />;
    } else if (i === "11d" || i === "11n") {
      return <img src={Thunderstorm} alt="thunder" />;
    } else if (i === "13d" || i === "13n") {
      return <img src={Snow} alt="snow" />;
    } else if (i === "50d" || i === "50n") {
      return <img src={Mist} alt="mist" />;
    } else {
      return null;
    }
  }; */


  //Second attempt
  //let nameImg;
  /* switch (icon) {
    case "01d":
    case "01n":
      nameImg = "Clear-Sky";
      break;
    case "02d":
    case "02n":
      nameImg = "Few-Clouds";
      break;
    case "03d":
    case "03n":
      nameImg = "Scattered-Clouds";
      break;
    case "04d":
    case "04n":
      nameImg = "Broken-Clouds";
      break;
    case "09d":
    case "09n":
      nameImg = "Shower-Rain";
      break;
    case "10d":
    case "10n":
      nameImg = "Rain";
      break;
    case "11d":
    case "11n":
      nameImg = "Thunderstorm";
      break;
    case "13d":
    case "13n":
      nameImg = "Snow";
      break;
    case "50d":
    case "50n":
      nameImg = "Mist";
      break;

    default:
      return null;
  } */

  //Final (image names were changed to match icon number)
  let nameImg;
  let newIcon = icon.replace(/\D/g,'');     // take out letters from icon
  if(newIcon){
    nameImg = newIcon
  }
 

  //Function calls
  let newDate = dateBuilder(new Date());
  let newTemp = Math.round(temp);
  let newName = toCapitalize(name);
  let newWind = Math.round(wind);
  let newFeels = Math.round(feelsLike);

  return (
    <div className={style.wrapper}>
      <div className={style.city}>
        <div className={style.top}>
          <div>
            <div className={style.left}>
              <p>{main}</p>
              <h1>{newTemp}°</h1>
            </div>
            <div className={style.right}>
              {" "}
              <img
                src={require("../../../assets/icon-svg/" + nameImg + ".svg")}
                alt={nameImg}
              />
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <div>
            <h4>{newName}</h4>
            <p>
              Feels like {newFeels}° <span> &#183; </span> Winds at{" "}
              {newWind}mph
            </p>
            <div>
              <p className={style.date}>{newDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
