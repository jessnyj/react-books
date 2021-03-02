import React, { useEffect, useState } from "react";
import Card from "../card/card";
import API from "../../utils/API";

function Container() {

  useEffect(() => {
    allBooks();
  }, []);

  const allBooks = () => {
    API.getBooks()
      .then(results => {
        console.log("Results");
        console.log(results);
      })
  }

  return (
    <section className="section is-large">
      <h1 className="title">Results</h1>
      <h2 className="subtitle">
      </h2>
      <Card />

    </section>

  );
}

export default Container;