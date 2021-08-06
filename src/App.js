import React from 'react';
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="header">
      <Switch>
        
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
