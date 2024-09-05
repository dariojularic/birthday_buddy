import React from "react";

function Buddy(props) {
  console.log(props)
  const {name, age, image} = props;
  return (
    <>
      <img src={image} alt="user image" />
      <div>
        <h3> {name} </h3>
        <p> {age} </p>
      </div>
      <button> Delete </button>
    </>
  )
}

export default Buddy;
