import React from "react";
import "./jumbotron.css";

function Jumbotron() {
	return (
		<section className="hero is-medium is-link">
			<div className="hero-body">
				<p className="headerTitle">
					React Google Books Search
				</p>
				<p className="headerSub">
					Search for and save books of interest
				</p>
			</div>
		</section>


		// <div>
		// 	<div>
		// 		<figure><img className="header" src="../../bookReact.png" alt="book"></img>
		// 		<p className="centered headerTitle">
		// 			React Google Books Search
		// 		</p>
		// 		<div className="centered headerSub">
		// 			Search for and save books of interest
		// 		</div>
		// 		</figure>
		// 	</div>
		// </div>
	);
}

export default Jumbotron;