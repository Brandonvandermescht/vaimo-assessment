import React, { useEffect, useState } from "react";
import MastercardIcon from './MastercardIcon.svg';

console.log(MastercardIcon);

function Mastercard() {
 
        return (
            <div>                
                <img className="mastercard" src={MastercardIcon}/>              
            </div>
        )
    
}

export default Mastercard