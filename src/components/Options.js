import { connect } from "react-redux";
import { debugMsg, increaseSession, increaseBreak, decreaseBreak, decreaseSession } from '../store/actions';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

function Options(props) {
  return (
    <div className="options-wrapper">
      <div className="options">
        <p className="options-text" id="break-label">Break Length</p>
        <div className="options-value">
          <div id="break-increment" className="icon noselect" onClick={() => props.increaseBreak()}><FaArrowCircleUp size="2em" className="react-icons" /></div>
          <p id="break-length" className="options-value-text">{props.breakLength}</p>
          <div id="break-decrement" className="icon noselect" onClick={() => props.decreaseBreak()}><FaArrowCircleDown size="2em" className="react-icons" /></div>
        </div>
      </div>
      <div className="options">
        <p className="options-text" id="session-label">Session Length</p>
        <div className="options-value">
          <div id="session-increment" className="icon noselect" onClick={() => props.increaseSession()}><FaArrowCircleUp size="2em" className="react-icons" /></div>
          <p id="session-length" className="options-value-text">{props.sessionLength}</p>
          <div id="session-decrement" className="icon noselect" onClick={() => props.decreaseSession()}><FaArrowCircleDown size="2em" className="react-icons" /></div>
        </div>
      </div>
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  debugMsg,
  increaseSession,
  increaseBreak,
  decreaseBreak,
  decreaseSession,
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

