import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";

//Insert state here

//manipulate state here

//

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route path="/*" component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
