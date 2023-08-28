import React from "react";



//create your first component
const Changer = ({seconds}) => {
	return (
		

		<div className="container-fluid">
			<h2>{seconds}</h2>

		</div>
	);
};

export default Changer;
