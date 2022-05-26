import './App.css';
import City from './assets/city.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avancando em React</h1>
      {/* Imagem em public - só por a / que já puxa */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em assts - importa como se fosse componente */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
