import React from "react";
import PropTypes from 'prop-types';

const stopCounter = () => {
    clearInterval(countInit);
    countInit = null;
}

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = (props) => {
	return (
		<>
			<div className="container d-flex justify-content-center text-center bg-dark">
				<h1 className="text-white">⏰</h1>		
				<ul className="list-group list-group-horizontal bg-dark">
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.diezmil}</li>
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.mil}</li>
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.centena}</li>
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.decena}</li>
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.unidad}</li>
				</ul>
			</div>
			
			<div className="container">
				<div className="pt-3 m-2 d-grid gap-2">		
					<button type="button" className="btn btn-danger" onClick={props.stop}>Stop</button>
					<button type="button" className="btn btn-success" onClick={props.reiniciar}>Reiniciar</button>
					<button type="button" className="btn btn-info" onClick={props.reanudar}>Reanudar</button>
				</div>
			</div>
			<div className="container mt-3 d-flex justify-content-center text-center bg-dark">		
				<h1 className="text-white">⏱</h1>
				<button type="button" className="btn btn-light" onClick={props.numero}>Iniciar Regresión</button>
				<ul className="list-group list-group-horizontal bg-dark">
					<li className="list-group-item bg-dark text-white border-light fs-2 fw-bold">{props.end}</li>					
				</ul>
			</div>
		</>
	);
};

export default Home;
