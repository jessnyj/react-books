import React from 'react';
import './searchcard.css';

function SearchCard(props) {
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
									<p className="authorSaved">{props.author}</p>
									<h4 className="subtitle desc">
										{props.description}
									</h4>
								</div>
								<div className="resultsBtns">
									<p className="control">
										<a href={props.link}>
											<button id="viewBtn" className="button is-dark"><i class="fas fa-external-link-alt"></i></button>
										</a>
									</p>
									<p className="control">
										<a href={props.link}>
											<button id="viewBtn" className="button is-link"><i class="fas fa-save"></i></button>
										</a>
									</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;