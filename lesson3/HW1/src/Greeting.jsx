import React from "react";
import age from "./age";

const Greeting = (props) => {
  console.log(props);
  const fullYears = age(props.birthDate);
  // console.log(fullYears);
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. 
    I'm ${fullYears} years old`}
    </div>
  )
}

export default Greeting;