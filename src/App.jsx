import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Buddy from "./Buddy";
import birthdays from './data';


function App() {
  const [showBirthdays, setShowBirthdays] = useState(true);

  return (
    <div className="container">
      <h1> {birthdays.length} Birthdays Today </h1>
      <ul className="birthday-list">
        {birthdays.map(birthday =>  {
          return (
            showBirthdays && <Buddy key={birthday.id} {...birthday}/>
          )
        })}
      </ul>
      <button className="clear-all-btn" onClick={() => setShowBirthdays(false)}>
        Clear All
      </button>
    </div>
  )
}

export default App
