import React from "react";
import ReactDOM from "react-dom";

import reducer from "./reducers/favorites";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
