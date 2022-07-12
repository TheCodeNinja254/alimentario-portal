import React from "react";
import ReactDOM from "react-dom";

// third party
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from "@apollo/client";
import Client from "./Apollo/Client";

// project imports
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

// style + assets
import "./assets/scss/style.scss";

// ===========================|| REACT DOM RENDER  ||=========================== //

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={Client}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById("alimentario_root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
