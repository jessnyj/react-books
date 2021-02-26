import React from "react";
import "./searchbar.css";

function Searchbar() {
	return (
		<section>
			<div className="card">
				<div className="card-content">
					Book Search
				<div className="content">
					<label className="label">Book</label>
					<input className="input is-link" type="text" placeholder="Link input" />
					<button className="button is-link">Normal</button>
	  		</div>
				</div>
			</div>
		</section>
	);
};

export default Searchbar;