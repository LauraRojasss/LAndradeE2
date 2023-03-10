import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //Hook para capturar errores.
  const [error, setError] = useState(false);

  //Función para construir un ID.

  const generarID = ()=> {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random+fecha

  }

  //Revisión del cargue de datos en el form - Con esto se empieza para poder editar.
  useEffect(()=>{
    // este paciente es de la tarjeta
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setPropietario
    }
  },[paciente])
  //Limpiar o resetar el formulario cuando carga la página

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Enviando formulario...')

    //Validar formulario para que no vaya con campos vacios.

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto de paciente - enviar al arreglo (prop)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    //Proceso de actualización.
    if (paciente.id){
      objetoPaciente.id= paciente.id
      // console.log(objetoPaciente)
      // console.log(paciente)
      const pacienteActualizado= pacientes.map( 
          pacienteState=> pacienteState.id===paciente.id ?
          objetoPaciente: pacienteState
      )

      setPacientes(pacienteActualizado)
      setPaciente({})

      // console.log("Editando...")
    }else{
      // console.log('Agregando...')
      objetoPaciente.id= generarID();
      setPacientes([...pacientes, objetoPaciente]);
      // console.log(objetoPaciente)

    }

    //Para verificar:
    console.log(objetoPaciente);


    //Limpieza de hooks-useState:

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento a Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && 
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        }

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota:
          </label>

          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese el nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario:
          </label>

          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese el nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email del Propietario:
          </label>

          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese el email del propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Ingreso:
          </label>

          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Ingrese la fecha de ingreso"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas :
          </label>

          <textarea
            id="sintomas"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ingrese los síntomas de la mascota"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? "Editar mascota" : "Agregar"}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
        />
      </form>
    </div>
  );
};

export default Formulario;
