import { connect } from "react-redux";

function Display(props) {
  
  const formatZero = (v) => {
    return v === 0 ? "00" : (v < 10 ? ("0" + v.toString()) : v.toString());
  }

  return (
    <div className="display">
      <p className="display-mode">{props.currentMode === "session" ? "SESSION" : "BREAK"}</p>
      <p className="display-value">
        {
          props.currentMode === "session" ? 
          (formatZero(props.currentSession.min) + " : " + formatZero(props.currentSession.sec)) :
          (formatZero(props.currentBreak.min) + " : " + formatZero(props.currentBreak.sec))
        }
      </p>
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Display);