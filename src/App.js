import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetails";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
