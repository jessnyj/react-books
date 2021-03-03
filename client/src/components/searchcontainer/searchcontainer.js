import React from 'react';
import './searchcontainer.css';
import SearchCard from '../searchcard/searchcard'

function SearchContainer() {
	return (
		<div>
			<div className="container is-widescreen">
				<div className="notification">
					<h1 className="resultsSearch">Results:</h1>
					<SearchCard>

					</SearchCard>
				</div>
			</div>
		</div>
	);
};

export default SearchContainer;