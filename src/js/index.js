//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes, { func } from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



//render your react application

let countInit = 0;

const counter = setInterval ((()=>{
    countInit += 1;
    //ReactDOM.render(<Home count={countInit}/>, document.querySelector("#app"));
    ReactDOM.render(<Home count={countInit} end={countEnd} stop={stopCounter} reiniciar={reiniciarCounter} reanudar={reanudarCounter}/>, document.querySelector("#app"));

}),1000) 

let countEnd = prompt('Indica un número ');
const counterNeg = setInterval ((()=>{
    countEnd = countEnd - 1;
    ReactDOM.render(<Home count={countInit} end={countEnd} stop={stopCounter} reiniciar={reiniciarCounter} reanudar={reanudarCounter}/>, document.querySelector("#app"));

}),1000) 

const stopCounter = () => {
    clearInterval(countInit);
    //countInit = null;
}

const reiniciarCounter = () => {
   clearInterval(countInit);
    countInit = 0;
    counter();
}

const reanudarCounter = () => {
    stopCounter();
    counter();
}

ReactDOM.render(<Home count={countInit} end={countEnd} stop={stopCounter} reiniciar={reiniciarCounter} reanudar={reanudarCounter}/>, document.querySelector("#app"));
