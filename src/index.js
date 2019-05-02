//const element = document.createElement("h1");
//element.innerText = "Hello, Platzi Badges!";

//const container = document.getElementById("app");

//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './Components/App';
//import Badge from "./Components/Badge";
//import Badges from './Pages/Badges.jsx';
//const element = <h1>Hello, Platzi Badges!</h1>;
//{} --> Props
//const element = React.createElement("h1", {}, "Hola soy create element");
//const name = "David";
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
