import { connect } from "react-redux";

function Display(props) {
  return (
    <div className="display">
      <p>Mode</p>
      <p>Value</p>
    </div>
  )
}

// Mapping the state to the component props
const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Display);