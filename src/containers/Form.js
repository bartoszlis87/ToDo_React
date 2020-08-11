import { connect } from "react-redux";
import { add } from '../redux/actions'
import Form from "../components/Form";

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  add: (title) => dispatch(add(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
