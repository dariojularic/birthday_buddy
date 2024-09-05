import React from "react";
import "./Buddy.css"

function Buddy(props) {
  console.log(props)
  const {name, age, image} = props;
  return (
    <div className="birthday">
      <img className="profile-image" src={image} alt="user image" />
      <div className="user-info">
        <h3 className="user-name"> {name} </h3>
        <p className="user-age"> {age} </p>
      </div>
      <button> Delete </button>
    </div>
  )
}

export default Buddy;
