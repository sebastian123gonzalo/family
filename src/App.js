import logo from './logo.svg';
import './App.css'; 
import Informacion from './componentes/info' /*Se asgume que es .js*/

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Mi familia:</h1>
        <Informacion 
          nombre='Roberto Bernardino Paredes Mendoza'
          relacion='Padre'
          imagen='padre'
          descripcion='descripcion de papas'  
        />
        <Informacion 
          nombre='Miriam Maria Puente Pacheco'
          relacion='Madre'
          imagen='madre'
          descripcion='descripcion de madre :o'  
        />
        <Informacion 
          nombre='Sebastian Roberto Paredes Puente'
          relacion='YOOOO'
          imagen='yo'
          descripcion='descripcion de mi...perhaps later...'  
        />
        <Informacion 
          nombre='Mariana Miriam Paredes Puente'
          relacion='Hermana 1'
          imagen='mar'
          descripcion='descripcion de groot'  
        />
        <Informacion 
          nombre='Fernanda Genesis Paredes Puente'
          relacion='Hermana 2'
          imagen='fer'
          descripcion='descripcion de tokofer'  
        />
      </div>
    </div>
  );
}

export default App;
