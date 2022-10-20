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

const counter = setInterval ((()=>{
    countInit += 1;
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
                    numero={num}
                    end={countEnd}
                    stop={stopCounter} 
                    reiniciar={reiniciarCounter} 
                    reanudar={reanudarCounter}/>, document.querySelector("#app"));

}),1000) 



    //let countEnd = prompt('Indica un número ');
    const num = () => {
          return prompt('Indica un número ');
    }
    
    let countEnd = num;
    console.log(countEnd);
    const counterNeg = setInterval ((()=>{
        let countEnd = parseInt(num);
        countEnd = countEnd - 1;
        if (countEnd === 10) {alert("Te quedan 10 segundos")}
        if (countEnd === 0) {clearInterval(counterNeg)};
        ReactDOM.render(<Home unidad={countInit} 
            decena={decenas} 
            centena={centenas} 
            mil={millar} 
            diezmil={dmillar} 
            numero={num}
            end={countEnd}
            stop={stopCounter} 
            reiniciar={reiniciarCounter} 
            reanudar={reanudarCounter}/>, document.querySelector("#app"));

    }),1000)


const stopCounter = () => {
    clearInterval(counter);
    //countInit = null;
}

const reiniciarCounter = () => {
   clearInterval(countInit);
    countInit = 0;
    decenas = 0;
    centenas = 0;
    millar = 0;
    dmillar = 0;
    if (countInit === 0) return counter();
}

//let comprobar = false;
const reanudarCounter = () => {
    if (countInit !== 0 || decenas !== 0) return counter;
    // if(!comprobar) {
    //     comprobar === true;
    //     clearInterval(counter)
    // } else {
    //     comprobar === false;
    //     counter();
    // }
    //stopCounter();
    //counter();
}

ReactDOM.render(<Home unidad={countInit} 
    decena={decenas} 
    centena={centenas} 
    mil={millar} 
    diezmil={dmillar}
    end={countEnd}
    numero={num}
    stop={stopCounter} 
    reiniciar={reiniciarCounter} 
    reanudar={reanudarCounter}/>, document.querySelector("#app"));
