import React from 'react';
import User from './User';
import City from './City';
// import withDataLoader from './withDataLoader';


const App = () => {
    return (
        <div className="page">
            <City />
            <User />
        </div>
    );
};

export default App;