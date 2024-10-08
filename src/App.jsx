import { useState } from 'react'
import './App.css'
import Buddy from "./Buddy";
import data from './data';

function App() {
  const [birthdays, setBirthdays] = useState(data)

  function handleDeleteAll() {
    const newArray = []
    setBirthdays(newArray);
  }

  function handleDeleteBirthday(id) {
    setBirthdays(prev => prev.filter(birthday => birthday.id !== id));
  }

  return (
    <div className="container">
      <h1> {birthdays.length} Birthdays Today </h1>
      <ul className="birthday-list">
        {birthdays.map(birthday =>  {
          return (
            birthdays && <Buddy key={birthday.id} {...birthday} handleDeleteBirthday={handleDeleteBirthday}/>
          )
        })}
      </ul>
      <button className="clear-all-btn" onClick={handleDeleteAll}> Clear All </button>
    </div>
  )
}

export default App
