import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { checkForToken } from "./store/actions/authActions";
import { fetchUsers } from "./store/actions/authActions";
import { fetchGym } from "./store/actions/gymActions";
import { fetchClass } from "./store/actions/classActions";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

store.dispatch(checkForToken());
store.dispatch(fetchUsers());
store.dispatch(fetchGym());
store.dispatch(fetchClass());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
