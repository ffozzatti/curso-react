import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import FragmentApp from './components/FragmentApp';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';


function App() {

  const [userName] = useState("Maria")

  const cars = [
    {id: 1, brand:"Ferrari", color:"Amarela", newCar: true, km: 0},
    {id: 2, brand:"Kia", color:"Branco", newCar: false, km: 34343},
    {id: 3, brand:"Renault", color:"Azuk", newCar: false, km: 234}
  ]

  function showMessage (){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  const peoples = [
    {id: 10, nome:"Felipe", idade: 24, profissao: "Analista"},
    {id: 11, nome:"Hellen", idade: 24, profissao: "Secretaria"},
    {id: 12, nome:"Joao", idade: 17, profissao: "Estudante"}
  ]

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

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}    
        />
      ))}

      {/* fragment */}
      <FragmentApp propFragment="teste"/>

      {/* children */}
      <Container myValue="teste">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="teste 2">
        <h5>Testando Container</h5>
      </Container>

      {/*executar função*/ }
      <ExecuteFunction myFunction={showMessage} />

      {/*state lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>


      {/*desafio*/}
      {peoples.map((people) => (
        <UserDatails         
          key={people.id}
          nome={people.nome} 
          idade={people.idade} 
          profissao={people.profissao} 
        />
      ))}

      
    </div>
  );
}

export default App;
