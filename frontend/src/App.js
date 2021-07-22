import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormNonModal from "./components/SignupFormPage/SignupFormNonModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home/index'
import DrinkPage from './components/DrinkPage'
import AllDrinks from './components/allDrinks'

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
          <Route exact path="/signup">
            <SignupFormNonModal  />
          </Route>
          <Route exact path="/drinks">
            <AllDrinks />
          </Route>
          <Route exact path="/drinks/:drinkId">
            <DrinkPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;