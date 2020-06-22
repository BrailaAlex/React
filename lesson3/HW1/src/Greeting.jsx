import React from "react";
import age from "./age";

const Greeting = (props) => {
  // console.log(props.user.birthDate);
  const fullYears = age(props.user.birthDate);
  // console.log(fullYears);
  return (
    <div className="greeting">
    {`My name is ${props.user.firstName} ${props.user.lastName}. 
    I'm ${fullYears} years old`}
    </div>
  )
}

export default Greeting;