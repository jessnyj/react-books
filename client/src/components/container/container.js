import React, { useEffect, useState } from "react";
import Card from "../card/card";
import API from "../../utils/API";

function Container() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    allBooks();
  }, []);

  const allBooks = () => {
    API.getBooks()
      .then(results => {
        console.log("Results");
        console.log(results.data);
        setBooks(results.data);
      });
  }

  return (
    <div className="container is-widescreen">
      <div className="notification is-link">
        {books.map(book => (
        <Card
          key={book._id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          link={book.link}
        />
        ))}
      </div>
    </div>
  );
}

export default Container;