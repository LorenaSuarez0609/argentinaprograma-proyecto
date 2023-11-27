import React from "react";

export default class Botones extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={() => alert(this.props.mensajes.primerMascota)}>
                    Mascota 1
                </button>
                <button onClick={() => alert(this.props.mensajes.segundaMascota)}>
                    Mascota 2
                </button>
            </div>
        )
    }
}