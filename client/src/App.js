import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Jumbotron from "./components/Jumbotron";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchForm from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
        <SearchForm />
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
