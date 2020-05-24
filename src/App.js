import React, {useState, useEffect} from 'react';
//Local Files
import style from './App.module.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';
import CitiesCard from './components/Cards/CitiesCard/CitiesCard';
import CurrentCard from './components/Cards/CurrentCard/CurrentCard';
import ErrorCard from './components/Cards/ErrorCard/ErrorCard';
import Loader from './components/Loader/Loader';




//WEATHER APP API
const api = {
  key: process.env.REACT_APP_APIKEY,
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [city, setCity] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([]) 
 

  useEffect(() => {
     loadData();
   }, [])



  //SEARCH FUNCTION
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            if (result.cod && result.message) {
              setError(true);
              setQuery('')
              setCity(result)
            // console.log(result.message);
            } else {
            // console.log(result)
              setError();
              setQuery('')
              const weather ={
                name: result.name,
                temp: result.main.temp,
                feelsLike: result.main.feels_like,
                wind: result.wind.speed,
                main: result.weather[0].main,
                icon: result.weather[0].icon
              }

              setCity(weather)

            }
      }) 
      
    }
  }
 

  //LOAD POP CITIES FUNCTION
  const loadData = async () => {
    const res = await fetch(`${api.base}group?id=2988507,2643743,2147714,5128581,1261481,&units=imperial&appid=${api.key}`);
    const data = await res.json();
     setCities(data.list)
     setLoading(false)
    // console.log(data.list)
    
  }

  //ONCLICK DISPLAY CITY FUNCTION
  const displayCity = v => {
    //console.log(v)
      const weather ={
        name: v.name,
        temp: v.main.temp,
        feelsLike: v.main.feels_like,
        wind: v.wind.speed,
        main: v.weather[0].main,
        icon: v.weather[0].icon
      }
      setError();
      setCity(weather)
  }
  

  
 
  return (
    //* Display Loader if page is not loaded
    (loading === true) ? (
      <Loader/>
    ) : (
     <div >

      {/* Header is hidden when current city or error is shown */}
        {(typeof city.main != "undefined" || error === true) ? (
         null
        ):(
          <Header/>
        )}
      

        <Input 
          type="text"
          city={city.main}  
          error={error}  
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          placeholder="Enter City Name"
        />


      {/* Current City OR Error is shown after search OR onClick is activated */}
        {(typeof city.main != "undefined") ? (
          <CurrentCard  
            name={city.name}
            temp={city.temp}
            feelsLike={city.feelsLike}
            wind={city.wind}
            main={city.main}
            icon={city.icon}  
          />
        ) : (
          null
        )}
        {(error === true) ? (
            <ErrorCard/>
        ) : (
            null
        )}

      
      {/* Data from cities is mapped through to display each citys details */}
        <div className={style.container}>
          <div className={style.wrapper}>
            <h3>Popular Locations</h3>
            <div className={style.cities}>
                {cities.map(city => (
                    <CitiesCard 
                      key={city.id}
                      name={city.name}
                      temp={city.main.temp}
                      weather={city.weather[0].main}
                      onClick={() => displayCity(city)}
                    /> 
                ))}
            </div>
          </div>
        </div>
      <Footer/>
    </div>

  ));
}

export default App;
