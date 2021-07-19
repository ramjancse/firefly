import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Galary from './Galary'
import { Route, Switch, Redirect } from "react-router-dom";
import Navebar from './Navbar'
import Footer from './Footer'



function App() {
  return (
    <>
    <Navebar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/galary" component={Galary} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
