import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Navbar2 from "./Navbar/Navbar2";
import Demo from "./pages/Demo";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import axios from "axios";
import "./App.css";
import Logout from "./pages/Logout";
import Registration from "./pages/Registration";
import MyRecipes from "./pages/MyRecipes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myRecipes, setMyRecipes] = useState([{}])

  const doLogin = () => {
    console.log("You are now logged in");
    setIsLoggedIn(true);
  };

  const doLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
  };

  const retrieveList = async () => {
    const resp = await axios.get('/api/list/retrieveList');
    console.log(resp.data);
    setMyRecipes(resp.data.myRecipes);
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        const resp = await axios.get("/api/status");
        console.log("you are already logged in");
        setIsLoggedIn(true);
      } catch (e) {
        console.log("error, not logged in");
        setIsLoggedIn(false);
      }
    }
    checkLogin();
  }, []);

  useEffect(() => {
    console.log(`Value of isLoggedIn: ${isLoggedIn}`);
    if (isLoggedIn) {
      retrieveList();
    }
  }, [isLoggedIn]);

  return (
    <div className="app1">
      <Router>
        <div className="container1">
          {isLoggedIn ? (
            <>
              <Navbar />
                <Switch>
                  <Route
                    path="/"
                    exact component={Demo}/>                
                  <Route path="/favoriterecipes">
                  <Favorites recipes={myRecipes} />  
                    </Route>
                  <Route 
                    path="/myrecipes" 
                    exact component={MyRecipes} />
                  <Route
                    path="/logout"
                    exact component={Logout}
                    children={<Logout doLogout={doLogout} />}
                  />
                  <Route 
                    path="/demo" 
                    exact component={Demo} />
                </Switch>
            </>
          ) : (
            <>
              <Navbar2 />
                <Switch>
                  <Route
                    path="/"
                    exact component={Login}
                    children={<Login doLogin={doLogin} />}
                  />
                  <Route 
                    path="/register" 
                    exact component={Registration} />  
                </Switch>
            </>
          )};
        </div>
      </Router>
    </div>
  );
};

export default App;
