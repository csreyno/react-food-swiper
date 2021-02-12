import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Favorites from "./pages/Favorites";
import Login from "./Login";
import axios from "axios";
import "./App.css";
import Logout from "./Logout";
import Registration from "./Registration";
import MyRecipes from "./pages/MyRecipes";
import RecipeDetails from "./RecipeDetails"

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
    const resp = await axios.get('/api/list/retrieveList')
    console.log(resp.data)
    setMyRecipes(resp.data.myRecipes)
  }

  useEffect(() => {
    async function checkLogin() {
      try {
        const resp = await axios.get("/api/users/login-status");
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
                  exact
                  component={Demo}/>                
                <Route path="/favoriterecipes">
                <Favorites recipes={myRecipes} />  
                  </Route>
                <Route path="/myrecipes" exact component={MyRecipes} />
                <Route path="/register" exact component={Registration} />
                <Route
                  path="/logout"
                  exact
                  component={Logout}
                  children={<Logout doLogout={doLogout} />}
                />
                <Route path="/demo" exact component={Demo} />
              </Switch>
            </>
          ) : (
            <>
              <Registration />
              {/* <br /> */}
              <Login doLogin={doLogin} 

              />
            </>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
