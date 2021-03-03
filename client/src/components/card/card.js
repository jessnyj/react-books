import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div>
      <div className="card cardHold">
        <div className="card-content">
          <div className="content">
            <p className="titleSaved">{props.title}</p>
            <p className="authorSaved">{props.author}</p>
            <article className="media">
              <figure className="media-left">
                <p className="image">
                  <img className="cardImg" src={props.image} alt={props.name}></img>
                </p>
              </figure>
              <div className="media-content">
                <section className="section is-primary">
                  <h2 className="title">Description:</h2>
                  <h3 className="subtitle">
                    {props.description}
                  </h3>
                </section>
              </div>
            </article>
            <div className="resultsBtns">
              <p className="control">
                <a href={props.link}>
                  <button id="viewBtn" className="button is-dark"><i className="fas fa-external-link-alt"></i></button>
                </a>
              </p>
              <p className="control">
                <button id="viewBtn" className="button is-link"><i className="fas fa-trash-alt"></i></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;