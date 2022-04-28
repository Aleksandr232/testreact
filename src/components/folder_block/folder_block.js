import React from "react";

import './folder_block.scss'

import folder from './folder.png'
import bluere from './bluere.png'
import recta from './recta.png'
import rectan from './rectan.png'

 const FolderBlock=()=>{
    return(
        <section>
            <div className="sort">sort by name</div>
            <div className="blockmenu">
                <div className="bluer">
                    <img className="bluere" src={bluere} alt="" />
                    <img className="bluere" src={bluere} alt="" />
                    <img className="bluere" src={bluere} alt="" />
                    <img className="bluere" src={bluere} alt="" />
                </div>
                <div className='recta'>
                    <img src={recta} alt="" />
                    <img src={rectan} alt="" />
                    <img src={recta} alt="" />
                    <img src={rectan} alt="" />
                    <img src={recta} alt="" />
                    <img src={rectan} alt="" />
                </div>
            </div>
            <div className="newfoldergrid">
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    {/* <div className="block_opacity"></div> */}
                    <div className="textfolder">New folder</div>
                    
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
                <div className="block">
                    <div className="img">
                        <img src={folder} alt="" />
                    </div>
                    <div className="textfolder">New folder</div>
                </div>
            </div>
        </section>
    )
 }

 export default FolderBlock