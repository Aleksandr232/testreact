import React,{useState} from "react";
import './left_panel.scss'


const api = {
    key: "af3904bcfb9954b533100c6413793863",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const apicrypt = {
    key: "cc4bd07ace6e6e7779b201193339ecfcc2a92b18e2d3ee1e53932d78425ccfbe",
    base: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD"
  }


 const LeftPanel=()=>{
    const [query, setQuery] = useState('KAZAN');
    const [weather, setWeather] = useState({});

    

    document.addEventListener('click', function(){
        return fetch(`${api.base}weather?q=KAZAN&units=metric&APPID=${api.key}`)
           .then(res => res.json())
           .then(result => {
             setWeather(result);
             setQuery('');
             console.log(result);
           });
       
     })
    return(
    <div>
        <div className="leftpanel"></div>
        <div className="spisok">
            <ul >
                <li><div className="spisok1">DFILE STORAGE</div></li></ul>
            <ul >
                <li><div className="spisok2">New folder</div></li>
            </ul>
            <ul  >
                <li ><div className="spisok2">New folder</div></li>
            </ul>
            <ul >
                <li ><div className="spisok2">New folder</div></li>
            </ul>
            <ul >
                <li ><div className="spisok2">New folder</div></li>
            </ul>
            <ul >
                <li ><div className="spisok2">New folder</div></li>
            </ul>
            <ul >
                <li ><div className="spisok2">New folder</div></li>
            </ul>
        </div>
        <div className="divider2"></div>
            <div className="weather">
            {weather.name='KAZAN'}, {weather.sys?.country}, <div className="weather_main">{Math.round(weather.main?.temp)}°c</div>
            </div>
        <div className="divider3"></div>
            <div className="crypto">

            </div>
        <div className="divider4"></div>
        <div className="divider5"></div>
        <div className="fileinfo">

        </div>
        <div className="divider6"></div>
    </div>
    )
}


export default LeftPanel