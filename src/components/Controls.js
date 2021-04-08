import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { debugMsg, changeMode, reset, updateTimer } from '../store/actions';
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';

function Controls(props) {

  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if(props.isActive === true && timer === null) {
      setTimer(window.setInterval(
        props.updateTimer, 10
      ));
    } else if(props.isActive === false && timer !== null) {
      window.clearInterval(timer);
      setTimer(null);
    }
  }, [props, timer]);

  return (
    <div className="controls noselect">
      <div className="icon" onClick={() => {props.changeMode();}}>
      {
        props.isActive === false ? 
        <FaPlay size="1.5em" style={{margin: "0 0.5em"}} /> :
        <FaPause size="1.5em" style={{margin: "0 0.5em"}} /> 
      }
      </div>
      <div className="icon" onClick={() => props.reset()}><FaSyncAlt size="1.5em" style={{margin: "0 0.5em"}} /></div>
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
  changeMode,
  reset,
  updateTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);