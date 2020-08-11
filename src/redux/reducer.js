import { combineReducers } from "redux";

import { ADD_TODO, TODO_TOGGLED, TODO_REMOVED } from './actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case (ADD_TODO):
      return [
        ...state,
        {
          title: action.payload,
          done: false,
        },
      ]
    case (TODO_TOGGLED):
      return state.map((todo) => {
        if (todo.title !== action.payload) {
          return todo
        }

        return {
          ...todo,
          done: !todo.done,
        }
      })
    case (TODO_REMOVED):
      return state.filter((todo) => {
        if (todo.title !== action.payload) {
          return true
        }
        return false
      })
    default:
      return state;
  }
};

export default combineReducers({
  todos
});
