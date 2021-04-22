import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from "./Footer";


function App() {

  const promise = loadStripe(
    "pk_test_51Iha4xGYuAsHh0X1wuOidvpI9wXp7k6WyKVvIyYtHXM3CbaBEikQHO9qZrZIS0Opd5syQWURoo96GPKxXzfV31Zn005P2GFbbL"
  );

  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition

   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            <Footer />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          {/* This is the default route */}
          <Route path='/'>
            <Header/>
            <Home/>
            <Footer />
          </Route>
        </Switch>        
      </div>
  </Router>
    
  );
}

export default App;
{/* We need React-router */}
{/*localhost.com */} 
{/*localhost.com/checkout */}
{/*localhost.com/login */}