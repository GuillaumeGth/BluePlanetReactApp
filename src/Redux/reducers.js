import { combineReducers } from "redux";
import { SET_ACTIVE_MENU } from "./actions";

function reduxApp(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return Object.assign({}, state, {
        activeMenu: action.active
      });
    default:
      return state;
  }
}
const ReduxApp = combineReducers({
  reduxApp
});
export default ReduxApp;
