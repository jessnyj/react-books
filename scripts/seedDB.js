const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
	{
		title: "1984",
		author: "George Orwell",
		description: "Stuff happens in the year 1984",
		image: "",
		link: ""
	},
	{
		title: "The Way of Kings",
		author: "Brandon Sanderson",
		description: "Read this book now!",
		image: "",
		link: ""
	},
	{
		title: "Rich Dad Poor Dad",
		author: "Robert Kiyosaki",
		description: "Money stuff",
		image: "",
		link: ""
	},
	{
		title: "Starship Troopers",
		author: "Robert Heinlein",
		description: "Bugs in Space!!!!",
		image: "",
		link: ""
	},
];

db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
