import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import ui from "./ui";
// import auth from "./auth";

// main reducers
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ui,
  });
