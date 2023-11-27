import React from 'react';
import PrimerComponente from '../components/Components-Class/PrimerComponente';
import Welcome from '../components/Welcome';
import Contador from '../components/Components-Class/Contador';
//Este es el componente de inicio
const Home = () => {
    return (
        <div>
            {/*Este componente es de bienvenida*/}
            {/*<Welcome />
            <PrimerComponente />

            <button>Mostrar 1</button>
            <button>Mostrar 2</button>
            <button>Mostrar 3</button>
            <button>Mostrar 4</button>
            <button>Mostrar 5</button>
            <button>Mostrar 6</button>*/}
            <Contador />
        </div>
    );
};

export default Home;