import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Login from "./Login"
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const doLogin = () => {
    console.log("You are now logged in")
    setIsLoggedIn(true)
  }

  const doLogout = () => {
    console.log('Logging out...')
  }

  useEffect(() => {
    async function checkLogin() {
      try {
        const resp = await axios.get('/users/login-status')
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
    <div className="container">
    { isLoggedIn ?
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={KeyFeature} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
      :
      <Login doLogin={doLogin} />
    }
    </div>

  );
}

export default App;