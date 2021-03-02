import React from "react";
import SearchContainer from "../components/searchcontainer/searchcontainer";
// import Card from "../components/card/card";
import Searchbar from "../components/searchbar/searchbar";

function Search() {
	return (
		<div className="container">
			<Searchbar />
			<SearchContainer>
			{/* map over card array */}
			
			</SearchContainer>
		</div>
	);
};

export default Search;