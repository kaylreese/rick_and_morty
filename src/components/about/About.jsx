import React from "react";
import aboutStyle from "./About.module.css";

export default function About(){
    return(
        <div className="aboutStyle.div">
            <br/>
            <h1 className={aboutStyle.titulo}>Bienvenidos a la Rick & Morty App</h1>
            <h6 className={aboutStyle.admin}>Creado por: <span>Samuel Bocanegra</span></h6>
        </div>
    );
}