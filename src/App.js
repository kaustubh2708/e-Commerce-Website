import React,{useEffect} from 'react';
import './App.css';
import{BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from './Home';
import Checkout from './Checkout';
import Login from'./Login';
import {useStateValue} from "./StateProvider";
import{auth} from "./Firebase";

function App() {

  const[{user},dispatch]=useStateValue();

  //Code runnin on a given condition
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser

        });
      } else{
        // user is logged out
        dispatch({
          type:"SET_USER",
          user:null
      });
    }
    });
    return() =>{
      //any clean up operations
      unsubscribe();
    }
  }, []);
  
  console.log('User is >>>',user);//for debugging

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
            {/*This is the default route*/}
          <Route path="/">
            <Header/>
            <Home/>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

