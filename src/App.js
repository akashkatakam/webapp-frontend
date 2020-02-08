import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import history from "./history.js";
import Recipes from "./components/Recipes.js";

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <div className="App-header">
          <span style={{float:"right"}}>RECIPES</span>
      </div>
      <Switch>
        <Route exact path="/recipes" component={Recipes}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;