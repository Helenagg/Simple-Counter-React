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
let decenas = 0;
let centenas = 0;
let millar = 0;
let dmillar = 0;
let stop = false;

const counter = setInterval ((()=>{
    
    if(!stop) {countInit += 1;}
    if (countInit === 10) {
        decenas ++;
        countInit = 0;}       
    if (decenas === 9) {
        centenas ++
        decenas = 0;}
    if (centenas === 9) {
        millar ++
        centenas = 0;}
    if (millar === 9) {
        dmillar ++
        millar = 0;}    
        
    //ReactDOM.render(<Home count={countInit}/>, document.querySelector("#app"));
    ReactDOM.render(<Home unidad={countInit} 
                    decena={decenas} 
                    centena={centenas} 
                    mil={millar} 
                    diezmil={dmillar}
                    end={countEnd}
                    stop={stopCounter} 
                    reiniciar={reiniciarCounter} />, document.querySelector("#app"));

}),1000) 

    
    let countEnd = prompt('Indica un número ');
    const counterNeg = setInterval ((()=>{
        countEnd = countEnd - 1;
        if (countEnd === 10) {alert("Te quedan 10 segundos")}
        if (countEnd === 0) {clearInterval(counterNeg)};
        ReactDOM.render(<Home unidad={countInit} 
            decena={decenas} 
            centena={centenas} 
            mil={millar} 
            diezmil={dmillar}
            end={countEnd}
            stop={stopCounter} 
            reiniciar={reiniciarCounter}/>, document.querySelector("#app"));

    }),1000)


const stopCounter = () => {
    stop = true;
}

const reiniciarCounter = () => {
    stop = false;
    countInit = 0;
    decenas = 0;
    centenas = 0;
    millar = 0;
    dmillar = 0;
}


ReactDOM.render(<Home unidad={countInit} 
    decena={decenas} 
    centena={centenas} 
    mil={millar} 
    diezmil={dmillar}
    end={countEnd}
    stop={stopCounter} 
    reiniciar={reiniciarCounter}/>, document.querySelector("#app"));
