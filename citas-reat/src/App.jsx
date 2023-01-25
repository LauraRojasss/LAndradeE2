/*Importar los módulos*/
import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"


/*Función creadora de la aplicación*/

function App() {

  //Simbolo arreglo.
  const [pacientes, setPacientes]=useState([]);
  //Para editar la tarjeta - Extraer valores con la tarjeta para editar y eliminar.
  //Con {} se usa para objeto.
  const [paciente, setPaciente]=useState({});

  return (

    /*Etiqueta padre y el body de la página*/
    <div className="container mx-auto mt-20" >
      <Header/>
      <div className="mt-12 md:flex"> 
          <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          // Tarjeta - Editar  de la tarjeta al form.
          paciente={paciente}
          setPaciente={setPaciente}

          /> 
          <ListaPacientes

          // OBJETO PACIENTE
          setPaciente={setPaciente}
          pacientes={pacientes}

          />
          
      </div>
    </div>
  )
}
/*Export para importar el módulo a otras partes de la app*/

export default App
