import React from "react";
import './headers.scss'

import logo from './logo.png'
import vector from './Vector.png'
import vector1 from './vector1.png'
import vector15 from './vector15.png'
import vector16 from './Vector16.png'
import vector17 from './Vector17.png'
import elpise3 from './elpise3.png'
import icon from './icon.png'
import angletop from './angletop.png'
import search from './search.png'
import searchmin from './searchmin.png'

 const Headers=()=>{
    return(
        <section>
            <div className="btn" >
            <button className="btn1" style={{width:'138px', height:'40px', borderRadius:'54px', background: '#6965E1', color:'#ffff'}}>UPLOAD <div className="round"><div className="plus"></div><div className="plus2"></div></div></button>
            <button className="btn2"style={{width:'40px', height:'40px', borderRadius:'71px'}}> <img className="vector1" src={vector1}></img><img className="vector2" src={vector}/></button>
            <button className="btn3" style={{width:'40px', height:'40px', borderRadius:'71px'}}> <img className="vector15" src={vector15} alt="" /><img className="vector16" src={vector16} alt="" />
            <img className="vector17" src={vector17} alt="" /></button>
            </div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>

            <div className="input">
                    <input className="input_text"  placeholder="Disk search" />
                    <img className="search" src={search} alt="" />
                    <img className="searchmin" src={searchmin} alt="" />
            </div>
            
            <div className="btn_icon">
                <button className="btn_icon1" ><img className="elpise3" src={elpise3} alt=""/><img className="angletop" src={angletop}></img></button>
                <button className="btn_icon2"><img  className='icon' src={icon} alt="" /></button>
            </div>

                <div className="divider"></div>
        </section>
    )
}

export default Headers