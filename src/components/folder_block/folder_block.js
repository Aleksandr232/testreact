import React from "react";

import './folder_block.scss'

import folder from './folder.png'

 const FolderBlock=()=>{
    return(
        <section>
            <div className="sort">sort by name</div>
            <div className="blockmenu"></div>
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