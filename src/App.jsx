import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Buddy from "./Buddy";
import birthdays from './data';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1> Birthdays Today </h1>
      {birthdays.map(birthday =>  {
        return (
          <Buddy key={birthday.id} {...birthday}/>
        )
      })}
    </>
  )
}

export default App
