import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
    <Clock offset = {0} city = {'London'}/>
    <Clock offset = {2} city = {'Kyiv'}/>
    <Clock offset = {-5} city = {'New Yourk'}/>
    </>
  );

};

export default App;