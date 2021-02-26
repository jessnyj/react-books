import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/" >
					Books
				</a>
				<a className="navbar-item" href="/search">
					Search
				</a>
				<a className="navbar-item" href="/saved">
					Saved
				</a>
  		</div>
		</nav>
	);
}

export default Navbar;