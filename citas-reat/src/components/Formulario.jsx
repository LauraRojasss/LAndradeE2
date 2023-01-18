const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      
      <h2 className="font-black text-3xl text-center">
        Seguimiento a Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="mpropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario:
          </label>

          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese el nombre del propietario"
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
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas :
          </label>

          <textarea
            id="fecha"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Ingrese los síntomas de la mascota"
          />
        </div>

        <input
          type="submit"
          value="Agregar Mascota"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-md"
        />
      </form>
    </div>
  );
};

export default Formulario;
