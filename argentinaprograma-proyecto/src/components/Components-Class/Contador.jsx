import React, {useEffect,useState} from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const [tarea, setTarea] = useState({
        id: "",
        nombre: "",
        setCompletada: false,
    });
    
    const [mostrar, setMostrar] = useState(false);


    const aumentar = () => {
    setContador(contador + 1);
    };

    const decrementar = () => {
        setContador(contador -1);
    };

    useEffect(() => {{
        console.log("Se monto el componente");
    }
    });

    useEffect(() => {
        //if (contador == 5 || contador == -1) alert("Hace mucho frio");
        if (contador > 8) setContador(0);
        if (contador < -2) setContador(0);
    }, [contador]);

    return (
        <div>
            <h2>Contador</h2>
            <h3>{contador}</h3>
            <button onClick={decrementar}> - </button>
            <button onClick={aumentar}> + </button>
            <button onClick={() => { 
                setMostrar(!mostrar);
            }}
            >
            {mostrar ? "Ocultar" : "Mostrar"}
            </button>
            {mostrar && (
                <div>
                    <h1> Holaaaaa</h1>
                    
                </div>
            )}
        </div>
    );
};

export default Contador;