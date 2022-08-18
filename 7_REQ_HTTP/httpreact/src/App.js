import './App.css';
import { useState, useEffect } from "react";



// 4 - custom hook
import { useFetch } from "./hooks/useFetch"


const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)


  const [name, setName] = useState("")
  const [price, setPrice] = useState("")


  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }  

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }
 

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleRemove(product.id)} >Excluir</button>
          </li>              
        ))}        
      </ul>
      )}
          <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Preço:
                <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
              </label>
              {/* 7 - state de loading post */}
              {loading && <input type="submit" disable value="Aguarde"/>}
              {!loading && <input type="submit" value="Criar"/>}

            </form>
          </div>

    </div>
  );
}

export default App;
