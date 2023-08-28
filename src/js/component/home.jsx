import React from "react";
import Counter from './counter.jsx'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid ">
			<p>
				<Counter />
			</p>
		</div>
	);
};

export default Home;
