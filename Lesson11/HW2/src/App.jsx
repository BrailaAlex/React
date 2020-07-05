import React from 'react';
import SuperUser from './User';
import MyCity from './City';

// const SuperUser = withDataLoader('https://api.github.com/users/octocat',User);
// const MyCity = withDataLoader(
//   'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1', City);

const App = () => {
    return (
        <div className="page">
            <MyCity />
            <SuperUser />
        </div>
    );
};

export default App;