import React from "react";
//Local Files
import style from "./CitiesCard.module.css";
import "./CitiesBackground.css";
import { toCapitalize } from "../../../Hoc/Functions/index";

const CitiesCard = ({ name, temp, weather, onClick }) => {
  // let change;
  /*  if (name === "Paris") {
    change = style.paris;
  } else if (name === "London") {
    change = style.london;
  } else if (name === "New York") {
    change = style.newyork;
  } else if (name === "New Delhi") {
    change = style.newdelhi;
  } else if (name === "Sydney") {
    change = style.sydney;
  } else {
    return null;
  } */

  //Second attempt
  // let change;
  /* switch (name) {
  case "Paris":
    change = style.paris;
    break;
  case "London":
    change = style.london;
    break;
  case "New York":
    change = style.newyork;
    break;
  case "New Delhi":
    change = style.newdelhi;
    break;
  case "Sydney":
    change = style.sydney;
    break;

  default:
    return null;
} */

  //Change Card Background  (images ids match converted name)
  let change;
  //converts name to match id for background change
  let convertName = name
    .toLowerCase()
    .split(" ")
    .join("");

  if (convertName) {
    change = convertName;
  }

  //Function calls
  let newName = toCapitalize(name);
  let newTemp = Math.round(temp);

  return (
    <div className={style.card} id={change} onClick={onClick}>
      <div className={style.text}>
        <div className={style.top}>
          <h4>{newName}</h4>
          <h4 className={style.degree}>{newTemp}°</h4>
        </div>
        <div className={style.bottom}>
          <p>{weather}</p>
        </div>
      </div>
    </div>
  );
};

export default CitiesCard;
