import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Landing from "./Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenSection from "./MenSection";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Landing />
          </Route>
          <Route path="/mensection">
            <Header />
            <MenSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
