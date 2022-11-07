import React from "react";
import "../assets/buttons.css"

function Buttons({value,onClick,className}){
    return(
        <button className={className} onClick={onClick}>{value}</button>
    )
}

export default Buttons;