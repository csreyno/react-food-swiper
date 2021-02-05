import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Login from "./Login"
import axios from 'axios'
import "./App.css";
import Logout from "./Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const doLogin = () => {
    console.log("You are now logged in")
    setIsLoggedIn(true)
  }

  const doLogout = () => {
    console.log('Logging out...');
    setIsLoggedIn(false)
  }

  useEffect(() => {
    async function checkLogin() {
      try {
        const resp = await axios.get('/api/users/login-status')
        console.log('you are already logged in');
        setIsLoggedIn(true);
      } catch (e) {
        console.log('error, not logged in');
        setIsLoggedIn(false);
      }
    }
    checkLogin();
  }, []);

  return (
      <div className="app1">
    
      <Router>
        <Navbar />
        <div className="container1">
        <Switch>
          <Route path="/" exact component={Login} children={ <Login doLogin={doLogin} />}/>
          <Route path="/features" exact component={KeyFeature} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Logout} children={ <Logout doLogout={doLogout} />}
          />
        { isLoggedIn ? 
          <Route path="/demo" exact component={Demo} />
          : 
      <Login doLogin={doLogin} />
    } 
        </Switch>
        </div>
      </Router>
       
    
    </div>

  );
}

export default App;