import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
    <Clock offset = {1} location = {'London'}/>
    <Clock offset = {3} location = {'Kyiv'}/>
    <Clock offset = {-6} location = {'New York'}/>
    </>
  );

};

export default App;