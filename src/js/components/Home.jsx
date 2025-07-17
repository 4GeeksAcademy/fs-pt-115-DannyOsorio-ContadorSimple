import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="contador">
			<div className="reloj">Reloj</div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
			<div className="number">0</div>
			
         
		</div>
	);
};

export default Home;