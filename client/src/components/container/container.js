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
    <section className="section is-large">
      <h1 className="title">Results</h1>
      {books.map(book => {
        <Card
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          link={book.link}
        />
      })}


    </section>

  );
}

export default Container;