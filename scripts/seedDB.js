const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
	{
		title: "1984",
		authors: "George Orwell",
		description: "Stuff happens in the year 1984",
		image: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		link: "https://play.google.com/store/books/details?id=kotPYEqx7kMC&source=gbs_api"
	},
	{
		title: "The Way of Kings",
		authors: "Brandon Sanderson",
		description: "Read this book now!",
		image: "http://books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		link: "https://books.google.com/books?id=QVn-CgAAQBAJ&dq=the+way+of+kings&hl=&source=gbs_api"
	},
	{
		title: "Rich Dad Poor Dad",
		authors: "Robert Kiyosaki",
		description: "Money stuff",
		image: "http://books.google.com/books/content?id=hXAiDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		link: "http://books.google.com/books?id=hXAiDAAAQBAJ&dq=ric+dad+poor+dad&hl=&source=gbs_api"
	},
	{
		title: "Starship Troopers",
		authors: "Robert Heinlein",
		description: "Bugs in Space!!!!",
		image: "http://books.google.com/books/content?id=rmEIDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		link: "https://books.google.com/books?id=rmEIDAAAQBAJ&dq=starship+troopers&hl=&source=gbs_api"
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
