import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { debugMsg, changeMode, reset, updateTimer, resetBeep } from '../store/actions';
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';
import beep from "../audio/short-alarm-clock-sound.mp3";

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

  useEffect(() => {
    if(props.playBeep === "play") {

      const audioContext = document.getElementById("beep");
      audioContext.play();      

      props.resetBeep();
    } else if(props.playBeep === "reset") {
      const audioContext = document.getElementById("beep");
      audioContext.pause();
      audioContext.currentTime = 0;
      props.resetBeep();
    }
  }, [props]);

  return (
    <div className="controls noselect">
      <div id="start-stop" className="icon" onClick={() => {props.changeMode();}}>
      {
        props.isActive === false ? 
        <FaPlay size="1.5em" style={{margin: "0 0.5em"}} className="react-icons" /> :
        <FaPause size="1.5em" style={{margin: "0 0.5em"}} className="react-icons" /> 
      }
      </div>
      <div id="reset" className="icon" onClick={() => props.reset()}><FaSyncAlt size="1.5em" style={{margin: "0 0.5em"}} className="react-icons" /></div>
      <audio className="clip" id="beep" src={beep} type="audio/mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
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
  updateTimer,
  resetBeep
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);