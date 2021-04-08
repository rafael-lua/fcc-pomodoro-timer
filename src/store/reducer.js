import _ from "lodash";
import actions from "./actions"

// State initial values
const appState = {
  sessionLength: 25,
  breakLength: 5,
  currentSession: {min: 25, sec: 0},
  currentBreak: {min: 5, sec: 0},
  currentMode: "session",
  isActive: false,
};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    case actions.CHANGE_MODE: {
      let newState = _.cloneDeep(state);
      newState.isActive = !newState.isActive;
      return newState;
    }

    case actions.RESET: {
      let newState = _.cloneDeep(state);
      newState.sessionLength = 25;
      newState.breakLength = 5;
      newState.currentSession = {min: 25, sec: 0};
      newState.currentBreak = {min: 5, sec: 0};
      newState.currentMode = "session";
      newState.isActive = false;
      return newState;
    }

    case actions.INCREASE_SESSION: {
      let newState = _.cloneDeep(state);
      if(newState.sessionLength < 60) { newState.sessionLength++; }
      return newState;
    }

    case actions.DECREASE_SESSION: {
      let newState = _.cloneDeep(state);
      if(newState.sessionLength > 1) { newState.sessionLength--; }
      return newState;
    }

    case actions.INCREASE_BREAK: {
      let newState = _.cloneDeep(state);
      if(newState.breakLength < 60) { newState.breakLength++; }
      return newState;
    }

    case actions.DECREASE_BREAK: {
      let newState = _.cloneDeep(state);
      if(newState.breakLength > 1) { newState.breakLength--; }
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;