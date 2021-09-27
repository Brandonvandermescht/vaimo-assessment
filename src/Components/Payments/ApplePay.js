import React, { useEffect, useState } from "react";
import ApplePayIcon from './ApplePayIcon.svg';

console.log(ApplePayIcon);

function ApplePay() {

        return (
            <div>                
                <img className="applepay" src={ApplePayIcon}/>                
            </div>
        )
    
}

export default ApplePay