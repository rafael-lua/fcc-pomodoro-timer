import _ from "lodash";
import actions from "./actions"

// State initial values
const appState = {
  sessionLength: 25,
  breakLength: 5,
  currentSession: {min: 25, sec: 0},
  currentLength: {min: 5, sec: 0},
  currentMode: "session",
  isActive: false,
};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    default:
      return state;
  }
};

export default reducer;