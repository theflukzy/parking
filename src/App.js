import React, { useState, useEffect } from "react";
//import { Router, Switch } from 'react-router-dom';
import "./App.css";
import Clock from "./components/clock";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import firstFloor from "./page/first";
import SecondFloor from "./page/second";
import SignInSide from "./components/SignInSide";
import thirdFloor from "./page/third";
import notFoundPage from "./page/notFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "./firebase";

// import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null,
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null,
        });
      }
    });
    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then((response) => {
      setSession({
        isLoggedIn: false,
        currentUser: null,
      });
    });
  };
  // const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="App">
      {session.isLoggedIn ? (
        <div>
          <Router>
            <div>
              <Navbar handleLogout={handleLogout}/>
              
              <div className="toggle">
                <Clock />
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/1st_floor" component={firstFloor} />
              <Route exact path="/2nd_floor" component={SecondFloor} />
              <Route exact path="/3th_floor" component={thirdFloor} />

              <Route path="*" component={notFoundPage} />
            </Switch>
          </Router>
        </div>
      ) : (
        <>
       
        <SignInSide setSession={setSession} />
        </>
      )}
    </div>
  );
}

export default App;
