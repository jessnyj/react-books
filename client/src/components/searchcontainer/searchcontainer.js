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

	const handleSaveButton = id => {
		console.log("HERE");
		console.log(id);

		//filter state for id
		//package important key values
		//API.saveBook(packagedValues)
		//clear searchTerm
		//clear page
	}

	const handleDeleteButton = id => {
		//pass id prop to button
		//pass handleDeleteButton function to button via onClick

		//API.deleteBook(id)
	}


	return (
		<div>
			<div className="container is-widescreen">
				<div className="notification">
					<Searchbar
						inputRef={inputRef}
						value={searchTerm}
						handleInputSearch={handleInputSearch}
					/>
					<h1 className="resultsSearch">Results:</h1>
					{searchResults.map(book => (
						<SearchCard
							key={book.id}
							title={book.volumeInfo.title}
							author={book.volumeInfo.authors}
							description={book.searchInfo.textSnippet}
							image={book.volumeInfo.imageLinks.thumbnail}
							link={book.volumeInfo.infoLink}
							handleSaveButton={handleSaveButton}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchContainer;