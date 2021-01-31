import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/App.css";
import AuthView from "./screens/auth/authView";
import HomeView from "./screens/home view/homeView";

const App = () => {
  const userAuth = useSelector((state) => state.userAuth);
  const { userInfo } = userAuth;
  return (
    <Router>
      <main className="py-3">
        {userInfo ? (
          <Switch>
            <Route path="/auth" component={AuthView} exact />
            <Route path="/" component={HomeView} exact />
          </Switch>
        ) : (
          <AuthView />
        )}
      </main>
    </Router>
  );
};

export default App;
