import { connect } from "react-redux";
import { toggle, remove, asyncRemove } from '../redux/actions';
import List from "../components/List";

const mapStateToProps = (state) => ({
  todos: state && state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (title) => dispatch(toggle(title)),
  remove: (title) => dispatch(remove(title)),
  asyncRemove: (title) => dispatch(asyncRemove(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
