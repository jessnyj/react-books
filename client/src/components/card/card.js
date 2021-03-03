import React from "react";
import "./card.css";

function Card(props) {
  // console.log(props);
  return (
    <div>
      <div>
        <div className="card cardHold">
          <div className="card-content">
            <div className="content">
              <article className="media">
                <figure className="media-left">
                  <p className="image">
                    <img className="cardImg" src={props.image} alt={props.name}></img>
                  </p>
                </figure>
                <div>
                  <p className="titleSaved">{props.title}</p>
                  <p className="authorSaved">{props.authors}</p>
                  <p className="subtitle desc">
                    {props.description}
                  </p>
                </div>
                <div className="resultsBtns">
                  <p className="control">
                    <a href={props.link}>
                      <button id="viewBtn" className="button is-dark"><i className="fas fa-external-link-alt"></i></button>
                    </a>
                  </p>
                  <p className="control">
                    <button id="viewBtn" className="button is-link" onClick={() => props.handleDeleteButton(props.id)}><i className="fas fa-trash-alt"></i></button>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;