//componentes con const
import React from "react";
//import mariposaGIF from "../assets/mariposaaletea.gif";

const Welcome = () => {
    //Vamos a definir funciones
    function handleSaludo(){
        return alert("Hola soy un evento");
    }

    return(
        <div>
            <h1>Comision 002</h1> 
            {/*<img src={mariposaGIF} alt=""/> */}
            <button onClick={() => handleSaludo()}>Mostrar mensaje</button>
        </div>
    );
};

export default Welcome;