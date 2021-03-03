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
                <div className="content desc">
                  <p>
                    {props.description}
                  </p>
                </div>
              </div>
            </article>
            <div className="resultsBtns">
              <p className="control">
                <a href={props.link}>
                  <button id="viewBtn" className="button is-danger is-outlined"><i class="fas fa-external-link-square-alt"></i></button>
                </a>
              </p>
              <p className="control">
                <button id="viewBtn" className="button is-link is-outlined">View</button>
              </p>
              <p className="control">
                <button className="button is-dark is-outlined">Delete</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;