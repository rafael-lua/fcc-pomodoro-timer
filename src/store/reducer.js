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
  playBeep: "stop"
};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    case actions.UPDATE_TIMER: {
      let newState = _.cloneDeep(state);
    
      if(newState.currentMode === "session") {

        if(newState.currentSession.sec > 0) {
          newState.currentSession.sec--;
        } else if(newState.currentSession.min > 0) {
          newState.currentSession.min--;
          newState.currentSession.sec = 59;
        } else if(newState.currentSession.sec === 0 && newState.currentSession.min === 0) {
          // Change to break, reset session.
          newState.currentMode = "break";
          newState.currentSession.sec = 0;
          newState.currentSession.min = newState.sessionLength;
          newState.playBeep = "play";
        }
      } else {

        if(newState.currentBreak.sec > 0) {
          newState.currentBreak.sec--;
        } else if(newState.currentBreak.min > 0) {
          newState.currentBreak.min--;
          newState.currentBreak.sec = 59;
        } else if(newState.currentBreak.sec === 0 && newState.currentBreak.min === 0) {
          // Change to session, reset break.
          newState.currentMode = "session";
          newState.currentBreak.sec = 0;
          newState.currentBreak.min = newState.breakLength;
          newState.playBeep = "play";
        }
      }
      
      return newState;
    }

    case actions.RESET_BEEP: {
      let newState = _.cloneDeep(state);
      newState.playBeep = "stop";
      return newState;
    }

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
      newState.playBeep = "reset";
      return newState;
    }

    case actions.INCREASE_SESSION: {
      let newState = _.cloneDeep(state);
      if(newState.sessionLength < 60) { newState.sessionLength++; }
      newState.currentSession.min = newState.sessionLength;
      return newState;
    }

    case actions.DECREASE_SESSION: {
      let newState = _.cloneDeep(state);
      if(newState.sessionLength > 1) { newState.sessionLength--; }
      newState.currentSession.min = newState.sessionLength;
      return newState;
    }

    case actions.INCREASE_BREAK: {
      let newState = _.cloneDeep(state);
      if(newState.breakLength < 60) { newState.breakLength++; }
      newState.currentBreak.min = newState.breakLength;
      return newState;
    }

    case actions.DECREASE_BREAK: {
      let newState = _.cloneDeep(state);
      if(newState.breakLength > 1) { newState.breakLength--; }
      newState.currentBreak.min = newState.breakLength;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;