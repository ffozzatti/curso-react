// import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
// import { CounterContext } from "../context/CounterContext"

// 4 - reafotrando com hook

import {useCounterContext} from "../Hooks/useCounterContext"

const Home = () => {

  const { counter } = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador : {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home