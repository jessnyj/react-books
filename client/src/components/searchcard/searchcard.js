import React from 'react';
import './searchcard.css';

function SearchCard(props) {
	return (
		<div>
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
										<h3 clasName="subtitle">
											{props.description}
										</h3>
									</section>
								</div>
							</article>
							<div className="resultsBtns">
								<p className="control">
									<a href={props.link}>
										<button id="viewBtn" className="button is-dark"><i class="fas fa-external-link-alt"></i></button>
									</a>
								</p>
								<p className="control">
									<button id="viewBtn" className="button is-link">View</button>
								</p>
								<p className="control">
									<button className="button is-dark">Save</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;