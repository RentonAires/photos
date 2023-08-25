import React from "react";
import "./header.css";
import logo from '../../assets/photography-icon.png'

export default function Header(){
    return(
        <>
            
            <div className="header">
                <img src={logo} alt="imagem da logo" />
                <h1>header!!!</h1>
            </div>
        </>
    )
}