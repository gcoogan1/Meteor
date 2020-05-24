

//CURRENT DATE FUNCTION
export const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()]; 
    let date = d.getDate();
    let month = months[d.getMonth()]; 
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  

  //UPPERCASE FUCNTION
  export const toCapitalize = (v) => {
    let string = String(v);
    let capital = string.toUpperCase();
      return `${capital}`
  }