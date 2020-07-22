import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter} from 'react-router-dom';
import App from './App';


const rootElement = document.querySelector('#root');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);