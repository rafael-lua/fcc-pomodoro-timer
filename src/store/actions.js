// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
  CHANGE_MODE: "CHANGE_MODE",
  INCREASE_SESSION: "INCREASE_SESSION",
  INCREASE_BREAK: "INCREASE_BREAK",
  DECREASE_SESSION: "DECREASE_SESSION",
  DECREASE_BREAK: "DECREASE_BREAK",
  RESET: "RESET",
  UPDATE_TIMER: "UPDATE_TIMER",
  RESET_BEEP: "RESET_BEEP",
};

// Debug testing function to log something to the console
export const debugMsg = (msg) => {
  return {
    type: actions.DEBUG,
    msg
  }
};


// App actions
export const updateTimer = () => {
  return {
    type: actions.UPDATE_TIMER
  }
};


export const resetBeep = () => {
  return {
    type: actions.RESET_BEEP
  }
};


export const changeMode = () => {
  return {
    type: actions.CHANGE_MODE
  }
};


export const reset = () => {
  return {
    type: actions.RESET
  }
};


export const increaseSession = () => {
  return {
    type: actions.INCREASE_SESSION
  }
};


export const increaseBreak = () => {
  return {
    type: actions.INCREASE_BREAK
  }
};


export const decreaseSession = () => {
  return {
    type: actions.DECREASE_SESSION
  }
};


export const decreaseBreak = () => {
  return {
    type: actions.DECREASE_BREAK
  }
};

// Defaults to actions types
export default actions;