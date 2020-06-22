const age = (birthDate) => {
  return Math.floor((new Date().getTime() 
  - birthDate.getTime())/
  (365.25*24*3600*1000));
}

export default age;