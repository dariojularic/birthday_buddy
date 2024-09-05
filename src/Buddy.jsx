import React from "react";
import "./Buddy.css"

function Buddy(props) {
  console.log(props)
  const {name, age, image} = props;
  return (
    <>
      <img className="profile-image" src={image} alt="user image" />
      <div className="user-info">
        <h3 className="user-name"> {name} </h3>
        <p className="user-age"> {age} </p>
      </div>
      <button> Delete </button>
    </>
  )
}

export default Buddy;
