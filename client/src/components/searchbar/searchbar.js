import React from "react";
import "./searchbar.css";

function Searchbar(props) {
	// console.log(props);
	return (
		<section>
			<div className="card">
				<div className="card-content searchTitle">
					Book Search
					<form className="content" >
						<label className="label bookLabel">Book:</label>
						<input className="input is-link" value={props.searchTerm} ref={props.inputRef} type="text" placeholder="Search a book" />
						<button className="button is-link searchBtn" onClick={props.handleInputSearch} type="click">Search</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Searchbar;