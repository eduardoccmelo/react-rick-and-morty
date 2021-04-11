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
              src="https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&format=jpeg&partner=hbomaxcom&productCode=hbomax&host=artist.api.cdn.hbo.com&w=480"
            ></img>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/charactersList">Characters List</NavLink>
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
        <footer className="footer">Footer</footer>
      </div>
    </Router>
  );
}

export default App;
