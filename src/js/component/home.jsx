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
			<div className="container d-flex text-center bg-dark">		
				<h1 className="text-white"><i class="fa-regular fa-clock"></i></h1>
				<h1 className="text-white">{props.count}</h1>
			</div>
			<div className="container d-flex text-center bg-dark">		
				<h1 className="text-white"><i class="fa-regular fa-clock"></i></h1>
				<h1 className="text-white">{props.end}</h1>
			</div>
			<div className="container d-flex text-center bg-dark">		
				<button type="button" className="btn btn-light" onClick={props.stop}>Stop</button>
				<button type="button" className="btn btn-light" onClick={props.reiniciar}>Reiniciar</button>
				<button type="button" className="btn btn-light" onCanPlay={props.reanudar}>Reanudar</button>
			</div>
		</>
	);
};

export default Home;
