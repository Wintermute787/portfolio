import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import About from "./portfolio/pages/About";
import Contact from "./portfolio/pages/Contact";
import Footer from "./shared/components/footer/Footer";
import Home from "./portfolio/pages/Home";
import Projects from "./portfolio/pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
