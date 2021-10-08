import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Collection1 from "./components/collection1";
import Collection2 from "./components/collection2";
import Collection3 from "./components/collection3";
import Collection4 from "./components/collection4";
import Collection5 from "./components/collection5";
import Collection6 from "./components/collection6";
import Collection7 from "./components/collection7";
import Collection8 from "./components/collection8";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Contents-wrapper">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/collection1" component={Collection1} />
            <Route path="/collection2" component={Collection2} />
            <Route path="/collection3" component={Collection3} />
            <Route path="/collection4" component={Collection4} />
            <Route path="/collection5" component={Collection5} />
            <Route path="/collection6" component={Collection6} />
            <Route path="/collection7" component={Collection7} />
            <Route path="/collection8" component={Collection8} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
