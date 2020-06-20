import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');

const elem = ( <
    div className = "title" >
    Todo List <
    /div>
);

ReactDOM.render(elem, rootElem)