import React from "react";
import './headers.scss'

import logo from './logo.png'

 const Headers=()=>{
    return(
        <div>
            <div className="btn" >
            <button className="btn1" style={{width:'138px', height:'40px', borderRadius:'54px', background: '#6965E1', color:'#ffff'}}>UPLOAD</button>
            <button className="btn2"style={{width:'40px', height:'40px', borderRadius:'71px'}}></button>
            <button className="btn3" style={{width:'40px', height:'40px', borderRadius:'35px'}}></button>
            </div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>

            <div className="input">
                    <input  type="Disk search" />
            </div>
            
            <div className="btn_icon">
                <button className="btn_icon1"></button>
                <button className="btn_icon2"></button>
            </div>

                <div className="divider"></div>
        </div>
    )
}

export default Headers