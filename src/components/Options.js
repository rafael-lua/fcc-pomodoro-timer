import { connect } from "react-redux";
import { debugMsg } from '../store/actions';
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa';

function Options(props) {
  return (
    <div className="options-wrapper">
      <div className="options">
        <div className="icon"><FaArrowCircleUp size="2em" /></div>
        <p>Value</p>
        <div className="icon"><FaArrowCircleDown size="2em" /></div>
      </div>
      <div className="options">
        <div className="icon"><FaArrowCircleUp size="2em" /></div>
        <p>Value</p>
        <div className="icon"><FaArrowCircleDown size="2em" /></div>
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
  debugMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);

