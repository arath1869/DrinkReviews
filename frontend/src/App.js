import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home/index'
import DrinkPage from './components/DrinkPage'
import AllDrinks from './components/allDrinks/index'
import ReviewPage from './components/ReviewPage/index'

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/drinks">
            <AllDrinks />
          </Route>
          <Route exact path="/drinks/:drinkId">
            <DrinkPage />
          </Route>
          <Route exact path="/reviews/:revId">
            <ReviewPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;