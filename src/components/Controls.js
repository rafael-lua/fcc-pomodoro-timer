import { connect } from "react-redux";
import { debugMsg, changeMode, reset } from '../store/actions';
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';

function Controls(props) {
  return (
    <div className="controls noselect">
      <div className="icon" onClick={() => props.changeMode()}>
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
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);