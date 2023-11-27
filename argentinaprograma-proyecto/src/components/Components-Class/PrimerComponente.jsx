import React from "react";
import Botones from "./OpcionesBotones";

const estudiante = "Gabriela";
const tecnologias = ["Html", "Css", "JavaScript", "React", "Redux", "Node JS", "Styled components"];
const mensajes = {primerMascota: "Gato", segundaMascota: "Perro"};

export default function PrimerComponente(){
    return (
        <div>
            <h1>Hola soy un nuevo componente!</h1>
            <h3>{estudiante}</h3>
            {/*renderizo las tecnologias del array en etiquetas de listado*/}
            <ul>
            {tecnologias.map((tecnologia) => {
                return <li>{tecnologia}</li>;
            })}
            </ul>
            <Botones mensajes={mensajes}/>
        </div>
    );

}