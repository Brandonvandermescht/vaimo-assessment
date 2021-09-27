import React, { useEffect, useState } from "react";
import TAIcon from './TAIcon.svg';

console.log(TAIcon);

function TALogo() {
 
        return (
            <div>                
                <img className="talogo" src={TAIcon}/>             
            </div>
        )
    
}

export default TALogo