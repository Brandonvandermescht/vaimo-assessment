import React, { useEffect, useState } from "react";
import MarchExpoLogo from './MarchExpoLogo.png';

console.log(MarchExpoLogo);

function MELogo() {
            
        return (
            <div>                
                <img className="melogo" src={MarchExpoLogo}/>               
            </div>
        )
       
}

export default MELogo