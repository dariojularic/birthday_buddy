import { useState } from "react";
import "./Buddy.css"

function Buddy(props) {
  const {id, name, age, image, handleDeleteBirthday} = props;
  return (
      <li className="birthday">
      <div className="user">
        <img className="profile-image" src={image} alt="user image" />
        <div className="user-info">
          <h3 className="user-name"> {name} </h3>
          <p className="user-age"> {age} years</p>
        </div>
      </div>
      <button className="delete-btn" onClick={() => handleDeleteBirthday(id)}> X </button>
    </li>
  )
}

export default Buddy;
