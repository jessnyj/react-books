import React from 'react';
import './searchcard.css';

function SearchCard(props) {
	console.log(props);
	return (
		<div>
			<p>{props.title}</p>
			<p>{props.author}</p>
			<p>{props.description}</p>
			<p>{props.image}</p>
			<br></br>
			{/* <p>{props.link}</p> */}
		</div>
	);
};

export default SearchCard;