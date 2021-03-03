import React, { useState, useRef, useEffect } from 'react';
import './searchcontainer.css';
import SearchCard from '../searchcard/searchcard'
import Searchbar from "../searchbar/searchbar";
import API from "../../utils/API";

function SearchContainer() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const inputRef = useRef("");

	// useEffect(() => {
	// 	getSearchResults(searchTerm);
	// }, [searchTerm])

	const getSearchResults = searchTerm => {
		console.log("SearchtTerm: " + searchTerm);

		API.searchBookName(searchTerm).then(result => {
			console.log(result);
			setSearchResults(result);
			
		}).catch(err => console.log(err));
	}

	const handleInputSearch = e => {
		e.preventDefault();

		let str = inputRef.current.value;
		let replaced = str.split(' ').join('+');

		setSearchTerm(replaced);
		inputRef.current.value = "";
		getSearchResults(replaced);
		// console.log(replaced);
	}

	return (
		<div>
			<div className="container is-widescreen">
				<div className="notification">
					<h1 className="resultsSearch">Results:</h1>
					<Searchbar
				inputRef={inputRef}
				value={searchTerm}
				handleInputSearch={handleInputSearch}
			/>

			{searchResults.map(book => (
				<SearchCard
					key={book.id}
					title={book.volumeInfo.title}
					author={book.volumeInfo.authors}
					description={book.searchInfo.textSnippet}
					image={book.volumeInfo.imageLinks.thumbnail}
					// link={book.volumeInfo.infoLink}
				/>
			))}
				</div>
			</div>
		</div>
	);
};

export default SearchContainer;