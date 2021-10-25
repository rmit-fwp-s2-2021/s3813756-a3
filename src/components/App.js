import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";


function App() {


  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar/>
        <main role="main">
          <div className="container my-3">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
