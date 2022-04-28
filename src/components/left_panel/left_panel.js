import React,{useState} from "react";

import etc from './etc.png'
import btc from './btc.png'
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
    const [weather, setWeather] = useState({});
    const[crypt, setCrypt]=useState({});

    /* document.addEventListener('click', function(){
        return fetch(`${api.base}weather?q=KAZAN&units=metric&APPID=${api.key}`)
           .then(res => res.json())
           .then(result => {
             setWeather(result);
             console.log(result);
           });
       
     }) */

     document.addEventListener('click', function(){
        return fetch(`${apicrypt.base}&api_key${apicrypt.key}`)
           .then(res => res.json())
           .then(result => {
             setCrypt(result);
             console.log(result);
           });
       
     })
    return(
    <section>
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
                <img className="imgcrpt" src={etc} alt="eth" />
                <div>1 ETH = {crypt.ETH?.USD}</div>
            </div>
        <div className="divider4"></div>
        <div className="crypto1">
                    <img className="imgcrptbtc" src={btc} alt="btc" />
                <div>1 BTC = {crypt.BTC?.USD}</div>
        </div>
        <div className="divider5"></div>
        <div className="fileinfo">
            <div className="text">File info</div>
            <div className="grid_info">
                <div className="name">Name</div>
                <div className="name_blue">New folder</div>
                <div className="name">Type</div>
                <div className="name_blue">File</div>
                <div className="name">Date of birth</div>
                <div className="name_blue">11.01.2021</div>
                <div className="name">Size</div>
                <div className="name_blue">13 232 MB</div>
                <div className="name" >Date of birth</div>
                <div className="name_blue">11.01.2021</div>
                <div className="name">Type</div>
                <div className="name_blue">File</div>
            </div>
        </div>
        <div className="divider6"></div>
    </section>
    )
}


export default LeftPanel