/*Importar los módulos*/
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"

/*Función creadora de la aplicación*/

function App() {


  return (

    /*Etiqueta padre y el body de la página*/
    <>
      <Header />
      <Formulario/>
      <ListaPacientes/>

    
    </>
  )
}
/*Export para importar el módulo a otras partes de la app*/

export default App
