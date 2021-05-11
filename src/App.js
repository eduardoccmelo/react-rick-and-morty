import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import CharactersList from "./components/CharactersList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="nav">
            <img
              className="navImg"
              alt="navImg"
              src="https://i.kym-cdn.com/photos/images/original/001/277/665/eaa.jpg"
            ></img>
            <div className="navLinks">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/charactersList">Characters List</NavLink>
            </div>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/charactersList/:id">
              <CharacterDetails />
            </Route>
            <Route path="/charactersList">
              <CharactersList />
            </Route>
            <Route path="*">
              <h1>NOPE!</h1>
            </Route>
          </Switch>
        </main>
        <footer className="footer">Rick and Morty API Project @ 2021</footer>
      </div>
    </Router>
  );
}

export default App;
