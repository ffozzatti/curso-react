import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const name = "Felipe"
  const [userName] = useState("Maria")
  return (   

    <div className="App">
      <h1>Avancando em React</h1>
      {/* Imagem em public - só por a / que já puxa */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em assets - importa como se fosse componente */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName}/>
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={0} color="Branco" newCar={true}/>
      <CarDetails brand="Ford" km={4500} color="Vermelho" newCar={false}/>
    </div>
  );
}

export default App;
