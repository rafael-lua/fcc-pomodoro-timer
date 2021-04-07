import { connect } from "react-redux";
import { debugMsg } from '../store/actions';
import { FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa';

function Controls(props) {
  let temp = true;

  return (
    <div className="controls">
      {
        temp === true ? 
        <div className="icon"><FaPlay size="1.5em" style={{margin: "0 0.5em"}} /></div> :
        <div className="icon"><FaPause size="1.5em" style={{margin: "0 0.5em"}} /></div> 
      }
      <div className="icon"><FaSyncAlt size="1.5em" style={{margin: "0 0.5em"}} /></div>
    </div>
  )
}


// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

// Mapping dispatchs actions to the component props (https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)
const mapDispatchToProps = {
  debugMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);