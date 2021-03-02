import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div>
      <h1 className="resultsSearch">Results:</h1>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <article className="media">
              <div className="media-left">
                <h4>{props.title}</h4>
                <h5>{props.author}</h5>
              </div>
              <div className="media-right">
                <div className="field is-grouped resultsBtns">
                  <p className="control">
                  <button className="button is-link is-outlined">View</button>
                  </p>
                  <p className="control">
                  <button className="button is-dark is-outlined">Save</button>
                  </p>
                </div>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={props.image} alt={props.name}></img>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    {props.description}
                </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;