import React, { useState, useEffect } from 'react';
import Movie from "./components/Movie"
import Home from "./components/Home"
import MovieDetail from "./components/MovieDetail"
import NotFound from "./components/NotFound"
import Loading from "./components/Loading"
import { useDebounce } from "use-debounce";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )

};


export default App;