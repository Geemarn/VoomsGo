import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { history, persistor } from "./redux/store";
import App from "./components/App";
import "./utils/fontAwesome";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("app");
const main = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

// render the main component
ReactDOM.render(main, container);
