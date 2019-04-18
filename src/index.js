import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import AdminLayout from "layouts/Admin/Admin.jsx";
import SignIn from "./components/SignIn/SignIn";
//import RTLLayout from "layouts/RTL/RTL.jsx";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "tilt.js";
import "./components/SignIn/styles.js"

const hist = createBrowserHistory();

const store = createStore(rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/signin" component = {SignIn} />
        <Route path="/admin" render={props => <AdminLayout {...props} />}  />
        <Redirect from="/" to="/signin" />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
